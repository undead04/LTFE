<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\Developer;
use App\Models\Game;
use App\Models\GameOrder;
use App\Models\Image;
use App\Models\Type;
use App\Models\Type_Game;
use App\Models\TypeGame;
use Illuminate\Http\RedirectResponse;
use Illuminate\Validation\Validator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Symfony\Component\Console\Input\Input;

class GameController extends Controller
{
    public function index()
    {
        $viewData = [];
        $viewData['title'] = 'Admin Game Page - Store Game';
        $viewData['games'] = Game::all();

        return response()->json($viewData, 200);
    }
    public function create()
    {

        return $viewData['typeGame'] = Type::all();
    }
    public function store(Request $request)
    {

        $genres = $request->input('genre');
        $request->validate([
            'name' => 'required|max:255',
            "description" => "required",
            "price" => "required|numeric|gte:0",
            "discount" => "required|numeric|gte:0|max:100",
            'developer' => 'required',
            'publisher' => 'required|min:5',
            'genre' => 'required',
            'imageMain' => 'image',
            'imagePaner' => 'image',
            'imageLogo' => 'image'
        ]);

        $newGame = new Game();
        $newGame->setNameGame($request->input('name'));
        $newGame->setDescription($request->input('description'));
        $newGame->setPrice($request->input('price'));
        $newGame->setGenre(implode(',', $genres));
        $newGame->setPublisher($request->input('publisher'));
        $newGame->setImage('');
        $newGame->setImageLogo('');
        $newGame->setImagePaner('');
        $newGame->setDeveloper($request->input('developer'));
        $newGame->setDiscount($request->input('discount'));
        $newGame->save();

        if ($request->hasFile('imageMain')) {
            $imageName = uniqid() . "."  . $request->file('imageMain')->extension();
            Storage::disk('public')->put(
                $imageName,
                file_get_contents($request->file('imageMain')->getRealPath())
            );
            $newGame->setImage($imageName);
        }
        if ($request->hasFile('imagePaner')) {
            $imageName = uniqid() . "."  . $request->file('imagePaner')->extension();
            Storage::disk('public')->put(
                $imageName,
                file_get_contents($request->file('imagePaner')->getRealPath())
            );
            $newGame->setImagePaner($imageName);
        }
        if ($request->hasFile('imageLogo')) {
            $imageName = uniqid() . "."  . $request->file('imageLogo')->extension();
            Storage::disk('public')->put(
                $imageName,
                file_get_contents($request->file('imageLogo')->getRealPath())
            );
            $newGame->setImageLogo($imageName);
        }
        $newGame->save();
        foreach ($genres as $genre) {
            $newTypeGame =  new TypeGame;
            $newTypeGame->setGameId($newGame->getGameId());
            $newTypeGame->setTypeId($genre);
            $newTypeGame->save();
        }
        return response()->json(['message' => 'Thêm game thành công'], 201);
    }
    public function delete($id)
    {
        GameOrder::where('gameid', $id)->delete();
        TypeGame::where('gameId', $id)->delete();
        Game::destroy($id);
        return response()->json(null, 204);
    }
    public function edit($id)
    {
        $viewData = [];

        $viewData['title'] = 'Admin Edit Pages';
        $viewData['game'] = Game::findOrFail($id);
        $viewData['typeGame'] = Type::all();

        return response()->json($viewData, 200);
    }
    public function update($id, Request $request)
    {
        $request->validate([
            'name' => 'required|max:255',
            "description" => "required",
            "price" => "required|numeric|gte:0",
            "discount" => "required|numeric|gte:0|max:100",
            'developer' => 'required',
            'publisher' => 'required|min:5',
            'genre' => 'required',
            'imageMain' => 'image',
            'imagePaner' => 'image',
            'imageLogo' => 'image'

        ]);
        $genres = $request->input('genre');
        $oldGame = Game::find($id);
        if ($oldGame->getGenre() !== implode(',', $genres)) {

            TypeGame::where('gameId', $id)->delete();
            foreach ($genres as $genre) {
                $newTypeGame =  new TypeGame;
                $newTypeGame->setGameId($oldGame->getGameId());
                $newTypeGame->setTypeId($genre);
                $newTypeGame->save();
            }
        }
        $oldGame->SetNameGame($request->input('name'));
        $oldGame->setDescription($request->input('description'));
        $oldGame->setPrice($request->input('price'));
        $oldGame->setGenre(implode(',', $genres));
        $oldGame->setPublisher($request->input('publisher'));
        $oldGame->setDeveloper($request->input('developer'));


        if ($request->hasFile('imageMain')) {
            $imageName = uniqid() . "."  . $request->file('imageMain')->extension();
            Storage::disk('public')->put(
                $imageName,
                file_get_contents($request->file('imageMain')->getRealPath())
            );
            $oldGame->setImage($imageName);
        }
        if ($request->hasFile('imagePaner')) {
            $imageName = uniqid() . "."  . $request->file('imagePaner')->extension();
            Storage::disk('public')->put(
                $imageName,
                file_get_contents($request->file('imagePaner')->getRealPath())
            );
            $oldGame->setImagePaner($imageName);
        }
        if ($request->hasFile('imageLogo')) {
            $imageName = uniqid() . "."  . $request->file('imageLogo')->extension();
            Storage::disk('public')->put(
                $imageName,
                file_get_contents($request->file('imageLogo')->getRealPath())
            );
            $oldGame->setImageLogo($imageName);
        }



        $oldGame->save();

        return response()->json(null, 204);
    }
}
