<?php

namespace App\Http\Controllers\client;

use App\Http\Controllers\Controller;
use App\Models\Game;
use App\Models\Type;
use App\Models\Type_Game;
use Illuminate\Http\Request;

class GameController extends Controller
{
    public function detail($id)
    {
        $viewData = [];
        $viewData['game'] = Game::find($id);
        $viewData['title'] = $viewData['game']->getNameGame() . ' | Details';
        $viewData['type'] = Type::find($viewData['game']->getGenre());
        return response()->json($viewData, 200);
    }

    public function allGames()
    {
        $viewData = [];
        $viewData['title'] = 'Game Store 3' . ' | All games';
        $viewData['games'] = Game::all();
        $viewData['type'] = Type::all();
        $viewData['oldCheck'] = [];
        return response()->json($viewData, 200);
    }
    public function viewMore($type)
    {
        $viewData = [];
        $viewData['type'] = Type::where('typeNames', $type)->select('id', 'typeNames')
            ->first();

        $viewData['title'] = $viewData['type']->getTypeGame() . ' | viewMore';
        return response()->json($viewData, 200);
    }
}
