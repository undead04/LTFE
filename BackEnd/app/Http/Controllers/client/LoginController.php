<?php

namespace App\Http\Controllers\client;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Validation\ValidationException;
use Illuminate\Http\Request;

class LoginController extends Controller
{
    function login()
    {
        return view('clients.login');
    }

    function register(Request $request)
    {
        try {
            $request->validate([
                'name' => 'required|max:60|unique:users',
                'email' => 'required|max:60|unique:users',
                'password' => 'required|min:8'
            ]);
        } catch (ValidationException $e) {
            return response()->json(['errorCode' => 1, 'message' => $e->errors(), 'data' => ''], 422);
        }
        $user = new User();
        $user->setName($request->input('name'));
        $user->setEmail($request->input('email'));
        $user->setPassword($request->input('password'));
        $user->setBalance(500000);
        $user->save();
        return response()->json([
            'errorCode' => 0,
            'message' => 'Đăng nhập thành công',
            'data' => ''

        ], 201);
    }
}
