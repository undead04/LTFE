<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\Game;
use App\Models\Type;
use App\Models\Type_Game;
use App\Models\TypeGame;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class GenresController extends Controller
{
    //
    public function index()
    {
        $viewData = [];
        $viewData['title'] = 'Admin Game Page - Genres';
        $viewData['genres'] = Type::all();
        return response()->json(['errorCode' => 0, 'message' => '', 'data' => $viewData], 200);
    }
    public function addGenres(Request $request)
    {

        $request->validate([
            'typeNames' => 'required|max:100',
        ]);

        // $viewData['typeNames'] = 
        $newType = new Type();
        $newType->setTypeGame($request->input('typeNames'));
        $newType->save();

        return response()->json(['errorCode' => 0, 'message' => 'Thêm loại thành công', 'data' => ''], 201);
    }
    public function edit($id)
    {
        $viewData = [];

        $viewData['title'] = 'Admin Edit Type Page';
        $viewData['genres'] = Type::findOrFail($id);
        return response()->json(['errorCode' => 0, 'message' => '', 'data' => $viewData], 200);
    }
    public function update($id, Request $request)
    {

        $request->validate([
            'typeNames' => 'required|max:255'
        ]);

        $oldGame = Type::find($id);
        $oldGame->setTypeGame($request->input('typeNames'));
        $oldGame->save();
        return response()->json(['errorCode' => 0, 'message' => 'update loại thành công', 'data' => ''], 201);
    }

    public function delete($id)
    {
        TypeGame::where('typeId', $id)->delete();

        Type::destroy($id);
        return response()->json(['errorCode' => 0, 'message' => 'xóa loại thành công', 'data' => ''], 200);
    }
}
