<?php

namespace App\Http\Controllers\client;

use App\Http\Controllers\Controller;
use App\Models\Game;
use App\Models\Type as ModelsType;
use App\Models\Type_Game;
use App\Models\TypeGame;
use GuzzleHttp\Psr7\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Mockery\Matcher\Type;

use function PHPSTORM_META\type;

class HomeController extends Controller
{
    public function index()
    {
        $viewData = [];
        $viewData['title'] = 'Home page | Web game store';
        $viewData['paner'] = Game::query()->orderBy('price', 'desc')->take(6)->get();

        $viewData['bestSaler'] = Game::join('gameorders', 'games.id', '=', 'gameorders.gameId')
            ->select(
                'games.id',
                'games.price',
                'games.image',
                'games.name_Game',

                'games.discount',
                DB::raw('sum(gameorders.quantity) as totalQuantity')
            )
            ->groupBy(
                'games.id',
                'games.price',
                'games.image',
                'games.name_Game',

                'games.discount'
            )
            ->orderBy('totalQuantity', 'desc')
            ->take(10)->get();

        $viewData['gameAction'] = Game::query()->join('typegames', 'games.id', '=', 'typegames.gameId')
            ->join('types', 'typegames.typeId', '=', 'types.id')
            ->select('games.id', 'games.price', 'games.image', 'games.name_Game', 'games.description', 'games.discount', 'games.genre')
            ->where('types.typeNames', 'Action')
            ->distinct()

            ->take('6')->get();
        $viewData['gameStrategy'] = Game::query()->join('typegames', 'games.id', '=', 'typegames.gameId')
            ->join('types', 'typegames.typeId', '=', 'types.id')
            ->select('games.id', 'games.price', 'games.image', 'games.name_Game', 'games.description', 'games.discount', 'games.genre')
            ->where('types.typeNames', 'Strategy')
            ->distinct()

            ->take('6')->get();
        $viewData['gameSports'] = Game::query()->join('typegames', 'games.id', '=', 'typegames.gameId')
            ->join('types', 'typegames.typeId', '=', 'types.id')
            ->select('games.id', 'games.price', 'games.image', 'games.name_Game', 'games.description', 'games.discount', 'games.genre')
            ->where('types.typeNames', 'Sports')
            ->distinct()
            ->take('6')->get();

        $viewData['gameAd-si-ro'] = Game::query()->join('typegames', 'games.id', '=', 'typegames.gameId')
            ->join('types', 'typegames.typeId', '=', 'types.id')
            ->select('games.id', 'games.price', 'games.image', 'games.name_Game', 'games.description', 'games.discount', 'games.genre')
            ->where('typeNames', 'Adventure')
            ->orWhere('typeNames', 'Role-playing')
            ->orWhere('typeNames', 'Simulation')
            ->distinct()
            ->take('6')->get();
        $viewData['gameMM-Ca-Ho'] = Game::query()->join('typegames', 'games.id', '=', 'typegames.gameId')
            ->join('types', 'typegames.typeId', '=', 'types.id')
            ->select('games.id', 'games.price', 'games.image', 'games.name_Game', 'games.description', 'games.discount', 'games.genre')
            ->where('typeNames', 'MMO')
            ->orWhere('typeNames', 'Card Game')
            ->orWhere('typeNames', 'Horror')
            ->distinct()
            ->take('6')->get();
        return response()->json(['errorCode' => 0, 'message' => '', 'data' => $viewData], 200);
    }
}
