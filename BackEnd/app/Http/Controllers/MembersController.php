<?php

namespace App\Http\Controllers;

use App\Http\BaseResponse;
use App\Models\Member;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class MembersController extends Controller
{
    private $rules = [
        'name' => 'required',
        'email' => 'required|email',
        'password' => "required|min:8",

    ];
    private $messages = [
        'name.required' => "trường name bắt buộc",
        "email.required" => ':attributes bắt buộc',
        "email.email" => ':attributes phải là email',
        "password.required" => ':attributes bắt buộc',
        "password.min" => ':attributes tối thiểu :min kí tự',
    ];
    public function register(Request $request)
    {

        $validator = Validator::make($request->all(), $this->rules, $this->messages);
        if ($validator->fails()) {
            return BaseResponse::error(400, $validator->messages()->toJson());
        } else {
            try {
                $members = new Member();
                $members->name = $request->name;
                $members->email = $request->email;
                $members->password = bcrypt($request->password);
                $members->save();
                return BaseResponse::withData($members);
            } catch (\Exception $e) {
                return BaseResponse::error(500, $e->getMessage());
            }
        }
    }
    public function login(Request $request)
    {
        $data = ['email' => $request->email, 'password' => $request->password];

        if (auth('member')->attempt($data)) {
            $user = auth('member')->user();
            $user->tokens()->delete();

            $token = $user->createToken('Apitoken')->plainTextToken;
            $authToken = explode('|', $token)[1];
            $data = [
                'id' => $user->id,
                'name' => $user->name,
                'token' => $authToken

            ];


            return BaseResponse::withData($data);
        } else {

            return BaseResponse::error(1, 'Wrong email or password');
        }
    }
}
