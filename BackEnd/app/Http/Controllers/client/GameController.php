<?php

namespace App\Http\Controllers\client;

use App\Http\Controllers\Controller;
use App\Models\Game;
use App\Models\Type;
use App\Models\Type_Game;
use App\Models\TypeGame;
use Illuminate\Http\Request;

class GameController extends Controller
{
    public function detail($id)
    {

        $game = Game::Find($id);
        if (!$game) {
            return response()->json([
                'errorCode' => 1,
                'message' => 'không tìm thấy sản phẩm',
                'data' => ''
            ], 401);
        }
        $title = $game->getNameGame() . ' | Details';
        $type = TypeGame::where('gameId', $game->getGameId())->get();
        foreach ($type as $item) {
            $typeName[] = $item->type->getTypeGame();
        }
        return response()->json([
            'errorCode' => 0, 'message' => '', 'data' => [
                'game' => $game,
                'title' => $title,
                'type' => $typeName
            ]
        ], 200);
    }

    public function allGames()
    {

        $title = 'Game Store 3' . ' | All games';
        $games = Game::select('id', 'name_Game', 'image', 'discount', 'price')->get();

        $type = Type::all();
        $oldCheck = [];
        return response()->json(['errorCode' => 0, 'message' => '', 'data' => [
            'title' => $title,
            'games' => $games,
            'type' => $type,
            'oldCheck' => $oldCheck
        ]], 200);
    }
    public function viewMore($type)
    {
        $game = [];
        $type = Type::where('typeNames', $type)
            ->first();
        foreach ($type->typeGame as $typeGame) {
            $game[] = $typeGame->games->select('id', 'name_Game', 'image', 'discount')->get();
        }

        $title = $type->getTypeGame() . ' | viewMore';
        return response()->json(['errorCode' => 0, 'message' => '', 'data' => [
            'title' => $title,
            'game' => $game
        ]], 200);
    }
}
