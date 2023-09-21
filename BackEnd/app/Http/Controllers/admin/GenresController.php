<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\Game;
use App\Models\Type;
use App\Models\Type_Game;
use App\Models\TypeGame;
use Illuminate\Http\Request;

class GenresController extends Controller
{
    //
    public function index()
    {
        $viewData = [];
        $viewData['title'] = 'Admin Game Page - Genres';
        $viewData['genres'] = Type::all();
        return response()->json($viewData, 200);
    }
    public function addGenres(Request $request)
    {
        $request->validate([
            'typeName' => 'required|max:100',
        ]);
        // $viewData['typeNames'] = 
        $newType = new Type();
        $newType->setTypeGame($request->input('typeName'));
        $newType->save();

        return response()->json(['message' => 'Thêm thể loại thành công'], 201);
    }
    public function edit($id)
    {
        $viewData = [];

        $viewData['title'] = 'Admin Edit Type Page';
        $viewData['genre'] = Type::findOrFail($id);
        return response()->json($viewData, 200);
    }
    public function update($id, Request $request)
    {
        $request->validate([
            'typeName' => 'required|max:255'
        ]);

        $oldGame = Type::find($id);
        $oldGame->setTypeGame($request->input('typeName'));
        $oldGame->save();
        return response()->json(['message' => 'Update thể loại thành công'], 201);
    }

    public function delete($id)
    {
        TypeGame::where('typeId', $id)->delete();

        Type::destroy($id);
        return response()->json(['message' => 'Xóa thể loại thành công'], 201);
    }
}
