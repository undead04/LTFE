<?php

namespace App\Http\Controllers\client;

use App\Http\BaseResponse;
use App\Http\Controllers\Controller;
use App\Models\Order;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class MyAcountController extends Controller
{
    public function orders(Request $request)
    {
        $userId = $request->userId;

        $viewData["title"] = "My Orders - Online Store";
        $viewData["subtitle"] = "My Orders";
        $viewData["orders"] = Order::where('userId', $userId)->get();
        $orderIds = $viewData["orders"]->pluck("id");
        $result = [];
        foreach ($orderIds as $value) {
            # code...
            $games = DB::table("games")->select("id", "name_Game")->whereIn("id", DB::table("gameorders")->where("orderId", "=", $value)->get()->pluck("gameId"))->get();
            $result[] = $games;
        }

        $viewData["ordersDetail"] = $result;
        return BaseResponse::withData($viewData);
    }
}
