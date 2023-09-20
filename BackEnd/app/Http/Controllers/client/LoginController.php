<?php

namespace App\Http\Controllers\client;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class LoginController extends Controller
{
    function index()
    {
        return view('clients.login');
    }

    function register()
    {
        return view('clients.register');
    }
}
