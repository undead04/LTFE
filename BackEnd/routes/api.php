<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\client\GameController as ClientGameController;
use App\Http\Controllers\client\HomeController;
use App\Http\Controllers\client\ShoppingController;
use App\Http\Controllers\client\MyAcountController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::prefix('games')->group(function () {
    Route::get('/', [ClientGameController::class, 'allGames'])->name('clients.games');
    Route::get('/{id}', [ClientGameController::class, 'detail'])->name('clients.gamesDetail');
    Route::get('viewMore/{type}', [ClientGameController::class, 'viewMore'])->name('clients.viewMore');
});
Route::prefix('/')->group(function () {
    Route::get('home', [HomeController::class, 'index'])->name('clients.home');
});
Route::prefix('cart')->group(function () {
    Route::get('', [ShoppingController::class, 'index'])->name('cart.index');
    Route::post('add/', [ShoppingController::class, 'add'])->name('cart.add'); //
    Route::get('delete/{id}', [ShoppingController::class, 'delete'])->name('cart.delete'); //delete cart
    Route::get('purchase', [ShoppingController::class, 'purchase'])->name('cart.purchase');
    Route::post('purchaseNow/{id}', [ShoppingController::class, 'purchaseNow'])->name('cart.purchaseNow'); //mua ngay
    Route::get('myAcount', [MyAcountController::class, 'orders'])->name('cart.orders');
});
