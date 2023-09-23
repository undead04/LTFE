<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProfitController extends Controller
{
    // [GET] /admin/profit
    public function index()
    {
        $viewData = [];
        $games = [];
        $viewData['orders'] = DB::table('gameorders')
            ->join('orders', 'gameorders.orderId', '=', 'orders.id')
            ->join('games', 'games.id', '=', 'gameorders.gameId')
            ->select('orders.id', 'gameorders.*', 'gameorders.gameId', 'games.name_Game')->get();

        // dd($viewData['orders']);
        $viewData['gameId'] = $viewData['orders']->pluck('gameId')->toArray();
        // dd(is_array($viewData['gameId']));

        foreach ($viewData['gameId'] as $key => $value) {
            # code...
            // $games[] = DB::table('games').join('order', 'games.id')->first();
        }

        $viewData['games'] = $games;
        // dd($viewData['games']);
        return response()->json(['errorCode' => 0, 'message' => '', 'data' => $viewData], 200);
    }
}
