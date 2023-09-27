<?php

namespace App\Http\Controllers\admin;

use App\Http\BaseResponse;
use App\Http\Controllers\Controller;
use App\Models\Developer;
use App\Models\Game;
use App\Models\GameOrder;
use App\Models\Image;
use App\Models\Type;
use App\Models\Type_Game;
use App\Models\TypeGame;
use Faker\Provider\Base;
use GuzzleHttp\Psr7\Response;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\ValidationException;
use PhpParser\Node\Expr\Throw_;
use Symfony\Component\Console\Input\Input;
use Throwable;

class GameController extends Controller
{
    public function index()
    {
        $viewData = [];
        $viewData['title'] = 'Admin Game Page - Store Game';
        $viewData['games'] = Game::all();
        $viewData['typeGame'] = Type::all();
        return BaseResponse::withData($viewData);
    }
    private $rules = [
        'name_Game' => 'required|max:255|min:2',
        'publisher' => 'required|min:2',
        'developer' => 'required|min:2',
        'price' => "required|numeric|gte:0",
        'discount' => "required|numeric|gte:0|max:100",
        "genre" => 'required',
        "description" => 'required',
        "image" => 'image',

    ];
    private $messages = [];

    public function store(Request $request)
    {
        $genres = $request->input('genre');

        $validator = Validator::make($request->all(), $this->rules, $this->messages);
        if ($validator->fails()) {
            return BaseResponse::withData($request->all());
            return BaseResponse::error(400, $validator->messages()->toJson());
        }

        try {
            $newGame = new Game();

            if ($request->hasFile('imageMain')) {
                $imageName = uniqid() . "."  . $request->file('imageMain')->extension();
                Storage::disk('public')->put(
                    $imageName,
                    file_get_contents($request->file('imageMain')->getRealPath())
                );
                $newGame->setImage($imageName);
            }
            $newGame->setNameGame($request->input('name_Game'));
            $newGame->setDescription($request->input('description'));
            $newGame->setPrice($request->input('price'));
            $newGame->setGenre(implode(',', $genres));
            $newGame->setPublisher($request->input('publisher'));
            $newGame->setImage('');
            $newGame->setImageLogo('');
            $newGame->setImagePaner('');
            $newGame->setDeveloper($request->input('developer'));
            $newGame->setDiscount($request->input('discount'));



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

            return BaseResponse::success('Thêm game thành công');
        } catch (Throwable $e) {
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }
    public function delete($id)
    {
        $game = Game::find($id);
        if ($game) {
            try {
                GameOrder::where('gameid', $id)->delete();
                TypeGame::where('gameId', $id)->delete();
                $game->delete();
                return BaseResponse::success('xoa game thanh cong');
            } catch (Throwable $e) {
                return response()->json(['message' => $e->getMessage()], 500);
            }
        } else {
            return BaseResponse::error(404, 'Data not found');
        }


        return response()->json(['errorCode' => 0, 'message' => 'xóa game thành công', 'data' => ''], 201);
    }
    public function edit($id)
    {
        $viewData = [];
        $viewData['games'] = Game::findOrFail($id);
        $viewData['title'] = 'Admin Edit Pages';
        $viewData['typeGame'] = Type::all();
        if ($viewData['games']) {
            return BaseResponse::withData($viewData);
        } else {
            return BaseResponse::error(404, 'Data not found');
        }
    }
    public function update($id, Request $request)
    {

        $validator = Validator::make($request->all(), $this->rules, $this->messages);
        if ($validator->fails()) {
            return BaseResponse::error(400, $validator->messages()->toJson());
        }
        $genres = $request->input('genre');
        $oldGame = Game::find($id);
        if ($oldGame) {
            try {
                if ($oldGame->getGenre() !== implode(',', $genres)) {

                    TypeGame::where('gameId', $id)->delete();
                    foreach ($genres as $genre) {
                        $newTypeGame =  new TypeGame;
                        $newTypeGame->setGameId($oldGame->getGameId());
                        $newTypeGame->setTypeId($genre);
                        $newTypeGame->save();
                    }
                }
                $oldGame->SetNameGame($request->input('name_Game'));
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
                return BaseResponse::success('Update game thành công');
            } catch (Throwable $e) {
                return response()->json(['message' => $e->getMessage()], 500);
            }
        }
    }
}
