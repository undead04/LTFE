<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class HomeController extends Controller
{
    // [GET] /admin/profit
    public function index()
    {
        $viewData = [];
        $users = DB::table('members')->get();
        $viewData['userCount'] = count($users);

        $games = DB::table('games')->get();
        $viewData['gameCount'] = count($games);

        $genres = DB::table('types')->get();
        $viewData['genreCount'] = count($genres);

        $orders = DB::table('orders')->pluck('total')->toArray();
        // dd($orders);

        $total = 0;
        foreach ($orders as $key => $profit) {
            # code...
            $total += $profit;
        }

        $viewData['total'] = $total;
        return response()->json(['errorCode' => 0, 'message' => '', 'data' => $viewData], 200);
    }

    public function user()
    {

        $users = DB::table('members')->get();
        // dd($viewData['users']);

        return response()->json(['errorCode' => 0, 'message' => '', 'data' => [
            'users' => $users
        ]], 200);
    }
}
