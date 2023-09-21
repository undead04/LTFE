<?php

namespace App\Http\Controllers\client;

use App\Http\Controllers\Controller;
use App\Models\Game;
use App\Models\GameOrder;
use App\Models\Order;
use Illuminate\Contracts\Session\Session;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;
use Symfony\Contracts\Service\Attribute\Required;
use function PHPSTORM_META\map;


class ShoppingController extends Controller
{


    public function index()
    {

        $total = 0;
        $totalDiscount = 0;
        $gameInSession = Cache()->get('cart');

        if ($gameInSession) {

            $total = array_reduce($gameInSession, function ($total, $item) {
                return $total + $item['price'];
            });
            $totalDiscount = array_reduce($gameInSession, function ($total, $item) {
                return $total + $item['discount'] * $item['price'] / 100;
            });
        }
        $viewData["total"] = $total;
        $viewData['discount'] = $totalDiscount;
        $viewData['totalPrice'] = $total - $totalDiscount;
        $viewData["games"] = $gameInSession;
        return response()->json($viewData, 200);
    }
    public function add(Request $request)
    {
        $id = $request->input('id');
        $gameItem = Game::find($id);
        if (!$gameItem) {
            return response()->json([
                'message' => 'Sản phẩm không tồn tại',
            ], 404);
        }
        $cart = Cache::get('cart', []);
        $cart[$id] = [
            'id' => $gameItem->getGameId(),
            'name' => $gameItem->getNameGame(),
            'price' => $gameItem->getPrice(),
            'discount' => $gameItem->getDiscount(),
            'image' => $gameItem->getImage(),
        ];
        Cache::put('cart', $cart, 3600); // 1 phút
        return response()->json([
            'message' => 'Thêm san phẩm vào giỏ hàng thành công',
        ], 404);
    }
    public function delete($id)
    {
        $cart = Cache()->get('cart');

        unset($cart[$id]);
        Cache()->put('cart', $cart);
        return response()->json($cart, 201);
    }
    public function purchase()
    {
        $gameInSession = session()->get("cart");
        if ($gameInSession) {
            $userId = Auth::user()->getId();
            $order = new Order();
            $order->setUserId($userId);
            $order->setTotal(0);
            $order->save();
            $total = 0;
            $gameInCart = Game::findMany(array_keys($gameInSession));
            foreach ($gameInCart as $game) {

                $item = new GameOrder();

                $item->setPrice($game->getPrice() - ($game->getPrice() * $game->getDiscount() / 100));
                $item->setGameId($game->getGameId());
                $item->setOrderId($order->getOrderId());
                $item->save();
                $total += $game->getPrice() - ($game->getPrice() * $game->getDiscount() / 100);
            }
            $order->setTotal($total);
            $order->save();
            $newBalance = Auth::user()->getBalance() - $total;
            Auth::user()->setBalance($newBalance);
            Auth::user()->save();
            session()->forget('cart');
            $viewData = [];
            $viewData["title"] = "Purchase - Online Store";
            $viewData["subtitle"] = "Purchase Status";
            $viewData["order"] = $order;
            return view('cart.purchase')->with("viewData", $viewData);
        } else {
            return redirect()->route('cart.index');
        }
    }
    public function purchaseNow($id)
    {
        $game = Game::find($id);

        $userId = Auth::user()->getId();
        $order = new Order();
        $order->setUserId($userId);
        $order->setTotal($game->getPrice());
        $order->save();


        $item = new GameOrder();
        $item->setPrice($game->getPrice());
        $item->setGameId($game->getGameId());
        $item->setOrderId($order->getOrderId());
        $item->save();
        $order->save();

        $newBalance = Auth::user()->getBalance() - $game->getPrice();
        Auth::user()->setBalance($newBalance);
        Auth::user()->save();



        return redirect()->back();
    }
}
