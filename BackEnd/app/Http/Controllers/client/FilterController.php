<?php

namespace App\Http\Controllers\client;

use App\Http\Controllers\Controller;
use App\Models\Game;
use App\Models\Type;
use App\Models\Type_Game;
use App\Models\TypeGame;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class FilterController extends Controller
{
    //
    public function filter($genreList)
    {
        $data = json_decode($genreList);

        $list = $data;
        $results = [];
        $games = Game::query()->select('games.id', 'games.price', 'games.image', 'games.name_Game', 'games.description', 'games.discount', 'games.genre')->distinct()->get();
        foreach ($games as $game) {
            # code...
            $gameGenreList = Str::of($game->genre)->split('/[\s,]+/');

            foreach ($gameGenreList as $genre) {
                # code...
                if(in_array($genre, $list)) {
                    if(in_array($game, $results)) {
                        continue;
                    } else {
                        $results[] = $game;
                    }
                }
            }
            
        }
       

        return response()->json(['errorCode' => 0, 'message' => '', 'data' => [
            'title' => "Hi",
            'genreList' => $results,
            // 'type' => $typeName->getTypeGame()
        ]], 200);
        // $genreItem = [];
       
        // $genreList = DB::table('games')->pluck('genre', 'id');
        // $games = DB::table('games')->get();
        // $result = [];
        // $viewData = [];
        // $viewData['games'] = [];
        // $viewData['oldCheck'] =  $genreItem;
        // foreach ($genreList as $index => $genre) {
        //     # code...
        //     $item = Str::of($genre)->split('/[\s,]+/');
        //     $item = $item->toArray();
        //     if (isset($genreItem)) {
        //         foreach ($item as $key => $value) {
        //             if (in_array($value, $genreItem)) {
        //                 $result[] = $index;
        //             }
        //         }
        //     } else {
        //         return redirect()->route('clients.games');
        //     }
        // }
        // $viewData['games'] = Game::whereIn('id', $result)->get();
        // $viewData['title'] = "Game Result " . count($viewData['games']) . " items found";
        // $viewData['type'] = Type::all();
    }
}
