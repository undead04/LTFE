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
    public function filter(Request $request)
    {
        // $re = $request->all();
        $genreItem = [];
        $genreItem = $request->input('genreItem');
        // dd($genreItem);
        $genreList = DB::table('games')->pluck('genre', 'id');
        // dd($genreList);
        $games = DB::table('games')->get();
        $result = [];
        // dd($games);
        // dd($genreList);
        $viewData = [];
        $viewData['games'] = [];
        $viewData['oldCheck'] =  $genreItem;
        // dd($genreItem);

        // dd();
        // DB::table('games')->whereIn("id",);
        foreach ($genreList as $index => $genre) {
            # code...
            $item = Str::of($genre)->split('/[\s,]+/');
            $item = $item->toArray();
            // dd(typeOf($item));
            if (isset($genreItem)) {
                foreach ($item as $key => $value) {
                    # code...
                    if (in_array($value, $genreItem)) {
                        $result[] = $index;
                        // dd($result);
                    }
                }
            } else {
                return redirect()->route('clients.games');
            }
        }
        // dd($result);
        $viewData['games'] = Game::whereIn('id', $result)->get();
        // dd($viewData['games']);
        $viewData['title'] = "Game Result " . count($viewData['games']) . " items found";
        $viewData['type'] = Type::all();

        // dd($viewData['games']);
        // dd($result);
        // $viewData['title'] = "Game Store";
        // $viewData['type'] = TypeGame::all();
        $request->flash();
        // $filterItems = [];
        return view("clients.games")->with('viewData', $viewData);
    }
}
