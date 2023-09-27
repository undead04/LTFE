<?php

namespace App\Http\Controllers\client;

use App\Http\Controllers\Controller;
use App\Models\Game;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SearchController extends Controller
{

    function getSearchAjax($key)
    {
        if ($key == '') {
            return response()->json([
                'errorCode' => 0,
                'message' => '',
                'data' => [
                    'hintSearch' => ''
                ]
            ], 200);
        }
        $searchGame = Game::where('name_Game', 'like', '%' . $key . '%')->select('image', 'price', 'id', 'discount', 'name_Game')->get();
        return response()->json([
            'errorCode' => 0,
            'message' => '',
            'data' => [
                'hintSearch' => $searchGame
            ]
        ], 200);
    }
}
