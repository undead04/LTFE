<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\admin\GameController;
use App\Http\Controllers\client\GameController as ClientGameController;
use App\Http\Controllers\client\HomeController;
use App\Http\Controllers\admin\GenresController;

use App\Http\Controllers\admin\HomeController as AdminHomeController;
use App\Http\Controllers\admin\ProfitController;
use App\Http\Controllers\client\FilterController;
use App\Http\Controllers\client\LoginController;
use Illuminate\Support\Facades\Auth;
use PHPUnit\TextUI\XmlConfiguration\Group;
use App\Http\Controllers\client\ShoppingController;
use App\Http\Controllers\client\MyAcountController;
use App\Http\Controllers\client\SearchController;
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


Route::prefix('games')->group(function () {
    Route::get('/', [ClientGameController::class, 'allGames'])->name('clients.games'); //lấy tất cả game
    Route::get('/{id}', [ClientGameController::class, 'detail'])->name('clients.gamesDetail'); //chọn game chi tiết
    Route::get('viewMore/{type}', [ClientGameController::class, 'viewMore'])->name('clients.viewMore'); //chọn game viewMore theo loại
});
Route::prefix('/')->group(function () {
    Route::get('home', [HomeController::class, 'index'])->name('clients.home'); //trang home
    Route::get('search', [SearchController::class, 'getSearchAjax'])->name('search'); //lấy search
    Route::post('/register', [LoginController::class, 'register']);
});
Route::prefix('cart')->group(function () {
    Route::get('', [ShoppingController::class, 'index'])->name('cart.index'); //san phẩm trong cart
    Route::post('add/{id}', [ShoppingController::class, 'add'])->name('cart.add'); // thêm sản phẩm trong cart
    Route::get('delete/{id}', [ShoppingController::class, 'delete'])->name('cart.delete'); //delete cart
    Route::get('purchase', [ShoppingController::class, 'purchase'])->name('cart.purchase'); //thanh toán
    Route::post('purchaseNow/{id}', [ShoppingController::class, 'purchaseNow'])->name('cart.purchaseNow'); //mua ngay
    Route::get('myAcount', [MyAcountController::class, 'orders'])->name('cart.orders'); //xem hóa đơn
});
Route::prefix('admin')->group(function () {
    Route::get('/', [AdminHomeController::class, 'index'])->name('admin.home'); //dữ liệu trang admin Home
    Route::get('/users', [AdminHomeController::class, 'user'])->name('admin.user'); //trang user
    Route::get('/games', [GameController::class, 'index'])->name('admin.game.games'); //trang admin game
    Route::post('/games/store', [GameController::class, 'store'])->name('admin.game.store'); //thêm game
    Route::delete('/games/delete/{id}', [GameController::class, 'delete'])->name('admin.game.delete'); //xóa game
    Route::get('games/edit/{id}', [GameController::class, 'edit'])->name('admin.game.edit'); //trang edit game
    Route::put('games/update/{id}', [GameController::class, 'update'])->name('admin.game.update'); //edit game
    Route::get('games/create', [GameController::class, 'create'])->name('admin.game.create'); //trang tạo game
    Route::get('genres', [GenresController::class, 'index'])->name('admin.genre.genres'); //trang chứa bản thể loại
    Route::post('genres/store', [GenresController::class, 'addGenres'])->name('admin.genres.store'); //trang thêm thể loại
    Route::get('genres/create', [GenresController::class, 'create'])->name('admin.genre.create'); //trang input thêm thể loại
    Route::get('genres/edit/{id}', [GenresController::class, 'edit'])->name('admin.genre.edit'); //trang sữa thể loại
    Route::put('genres/update/{id}', [GenresController::class, 'update'])->name('admin.genre.update'); //update thể loại
    Route::delete('/genres/delete/{id}', [GenresController::class, 'delete'])->name('admin.genre.delete'); //xóa thể loại
    Route::get('/profile', [ProfitController::class, 'index'])->name('admin.profit.index'); //trang profit
});
