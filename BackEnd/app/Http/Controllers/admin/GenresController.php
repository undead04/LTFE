<?php

namespace App\Http\Controllers\admin;

use Illuminate\Support\Facades\Validator;
use App\Http\BaseResponse;
use App\Http\Controllers\Controller;
use App\Models\Game;
use App\Models\Type;
use App\Models\Type_Game;
use App\Models\TypeGame;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;
use Throwable;

class GenresController extends Controller
{
    private $rules = [
        'typeNames' => 'required|max:100',
    ];
    private $messages = [
        'typeNames.required' => "trường type name bắt buộc",
        "name_Game.max" => "Name game :max kí tự cao nhất",
    ];
    public function index()
    {
        $viewData = [];
        $viewData['title'] = 'Admin Game Page - Genres';
        $viewData['genres'] = Type::all();
        return BaseResponse::withData($viewData);
    }

    public function addGenres(Request $request)
    {
        $validator = Validator::make($request->all(), $this->rules, $this->messages);
        if ($validator->fails()) {
            return BaseResponse::error(400, $validator->messages()->toJson());
        }

        $request->validate([
            'typeNames' => 'required|max:100',
        ]);

        try {
            $newType = new Type();
            $newType->setTypeGame($request->input('typeNames'));
            $newType->save();
            return BaseResponse::success('Them loai game thanh cong');
        } catch (Throwable $e) {
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }
    public function edit($id)
    {
        $viewData = [];
        $viewData['genres'] = Type::findOrFail($id);
        $viewData['title'] = 'Admin Edit Type Page';
        if ($viewData) {
            return BaseResponse::withData($viewData);
        } else {
            return BaseResponse::error(404, 'data not found');
        }
    }
    public function update($id, Request $request)
    {

        $validator = Validator::make($request->all(), $this->rules, $this->messages);
        if ($validator->fails()) {
            return BaseResponse::error(400, $validator->messages()->toJson());
        }

        $oldGenre = Type::find($id);
        if ($oldGenre) {
            try {
                $oldGenre->setTypeGame($request->input('typeNames'));
                $oldGenre->save();
                return BaseResponse::success('upda thanh cong');
            } catch (Throwable $e) {
                return response()->json(['message' => $e->getMessage()], 500);
            }
        } else {
            return BaseResponse::error(404, 'data no found');
        }
    }

    public function delete($id)
    {
        $data = Type::find($id);
        if ($data) {
            try {
                TypeGame::where('typeId', $id)->delete();
                $data->delete();
                return BaseResponse::success('xoa loai thanh cong');
            } catch (Throwable $e) {
                return response()->json(['message' => $e->getMessage()], 500);
            }
        }
    }
}
