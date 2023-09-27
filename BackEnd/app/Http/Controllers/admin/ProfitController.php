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

        $viewData['orders'] = DB::table('gameorders')
            ->join('orders', 'gameorders.orderId', '=', 'orders.id')
            ->join('games', 'games.id', '=', 'gameorders.gameId')
            ->select('orders.id', 'games.price', 'games.name_Game', 'gameorders.created_at')->get();


        return response()->json(['errorCode' => 0, 'message' => '', 'data' => $viewData], 200);
    }
}
