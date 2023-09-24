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

        $title = 'Home page | Web game store';
        $paner = Game::query()->orderBy('price', 'desc')->select('id', 'price', 'image', 'name_Game', 'discount', 'description')->take(6)->get();

            $bestSaler = Game::join('gameorders', 'games.id', '=', 'gameorders.gameId')
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

        $gameAction = Game::query()->join('typegames', 'games.id', '=', 'typegames.gameId')
            ->join('types', 'typegames.typeId', '=', 'types.id')
            ->select('games.id', 'games.price', 'games.image', 'games.name_Game', 'games.description', 'games.discount', 'games.genre')
            ->where('types.typeNames', 'Action')
            ->distinct()
            ->take('3')->get();
        $gameStrategy = Game::query()->join('typegames', 'games.id', '=', 'typegames.gameId')
            ->join('types', 'typegames.typeId', '=', 'types.id')
            ->select('games.id', 'games.price', 'games.image', 'games.name_Game', 'games.description', 'games.discount', 'games.genre')
            ->where('types.typeNames', 'Strategy')
            ->distinct()

            ->take('6')->get();
        $gameSports = Game::query()->join('typegames', 'games.id', '=', 'typegames.gameId')
            ->join('types', 'typegames.typeId', '=', 'types.id')
            ->select('games.id', 'games.price', 'games.image', 'games.name_Game', 'games.description', 'games.discount', 'games.genre')
            ->where('types.typeNames', 'Sports')
            ->distinct()
            ->take('6')->get();
        $gameAdventure = Game::query()->join('typegames', 'games.id', '=', 'typegames.gameId')
            ->join('types', 'typegames.typeId', '=', 'types.id')
            ->select('games.id', 'games.price', 'games.image', 'games.name_Game', 'games.description', 'games.discount', 'games.genre')
            ->where('types.typeNames', 'Adventure')
            ->distinct()
            ->take('6')->get();
        $gamePuzzle = Game::query()->join('typegames', 'games.id', '=', 'typegames.gameId')
            ->join('types', 'typegames.typeId', '=', 'types.id')
            ->select('games.id', 'games.price', 'games.image', 'games.name_Game', 'games.description', 'games.discount', 'games.genre')
            ->where('types.typeNames', 'Puzzle')
            ->distinct()
            ->take('6')->get();
        $gameSimulation = Game::query()->join('typegames', 'games.id', '=', 'typegames.gameId')
            ->join('types', 'typegames.typeId', '=', 'types.id')
            ->select('games.id', 'games.price', 'games.image', 'games.name_Game', 'games.description', 'games.discount', 'games.genre')
            ->where('types.typeNames', 'Simulation')
            ->distinct()
            ->take('6')->get();
        $gameMMO = Game::query()->join('typegames', 'games.id', '=', 'typegames.gameId')
            ->join('types', 'typegames.typeId', '=', 'types.id')
            ->select('games.id', 'games.price', 'games.image', 'games.name_Game', 'games.description', 'games.discount', 'games.genre')
            ->where('types.typeNames', 'MMO')
            ->distinct()
            ->take('6')->get();
        $gameCard = Game::query()->join('typegames', 'games.id', '=', 'typegames.gameId')
            ->join('types', 'typegames.typeId', '=', 'types.id')
            ->select('games.id', 'games.price', 'games.image', 'games.name_Game', 'games.description', 'games.discount', 'games.genre')
            ->where('types.typeNames', 'Card Game')
            ->distinct()
            ->take('6')->get();
        $gameHorror = Game::query()->join('typegames', 'games.id', '=', 'typegames.gameId')
            ->join('types', 'typegames.typeId', '=', 'types.id')
            ->select('games.id', 'games.price', 'games.image', 'games.name_Game', 'games.description', 'games.discount', 'games.genre')
            ->where('types.typeNames', 'Horror')
            ->distinct()
            ->take('6')->get();
        $gameCasual = Game::query()->join('typegames', 'games.id', '=', 'typegames.gameId')
            ->join('types', 'typegames.typeId', '=', 'types.id')
            ->select('games.id', 'games.price', 'games.image', 'games.name_Game', 'games.description', 'games.discount', 'games.genre')
            ->where('types.typeNames', 'Casual')
            ->distinct()
            ->take('6')->get();
        $gameTactical = Game::query()->join('typegames', 'games.id', '=', 'typegames.gameId')
            ->join('types', 'typegames.typeId', '=', 'types.id')
            ->select('games.id', 'games.price', 'games.image', 'games.name_Game', 'games.description', 'games.discount', 'games.genre')
            ->where('types.typeNames', 'Tactical')
            ->distinct()
            ->take('6')->get();
        $gameArcade = Game::query()->join('typegames', 'games.id', '=', 'typegames.gameId')
            ->join('types', 'typegames.typeId', '=', 'types.id')
            ->select('games.id', 'games.price', 'games.image', 'games.name_Game', 'games.description', 'games.discount', 'games.genre')
            ->where('types.typeNames', 'Arcade')
            ->distinct()
            ->take('6')->get();



        return response()->json(['errorCode' => 0, 'message' => '', 'data' => [
            'title' => $title,
            'paner' => $paner,
            'bestSaler' => $bestSaler,
            'gameAction' => $gameAction,
            'gameTactical' => $gameTactical,
            'gameCasual' => $gameCasual,
            'gameHorror' => $gameHorror,
            'gameCard' => $gameCard,
            'gameMMO' => $gameMMO,
            'gameSimulation' => $gameSimulation,
            'gamePuzzle' => $gamePuzzle,
            'gameAdventure' => $gameAdventure,
            'gameSports' => $gameSports,
            'gameStrategy' => $gameStrategy,
            'gameArcade' => $gameArcade,

        ]], 200);
    }
}
