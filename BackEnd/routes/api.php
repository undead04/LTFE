<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MembersController;
use App\Http\Controllers\admin\GameController;
use App\Http\Controllers\client\GameController as ClientGameController;
use App\Http\Controllers\client\HomeController;
use App\Http\Controllers\admin\GenresController;
use App\Http\Controllers\UsersController;
use App\Http\Controllers\admin\HomeController as AdminHomeController;
use App\Http\Controllers\admin\ProfitController;
use App\Http\Controllers\client\FilterController;
use App\Http\Controllers\client\LoginController;
use Illuminate\Support\Facades\Auth;
use PHPUnit\TextUI\XmlConfiguration\Group;
use App\Http\Controllers\client\ShoppingController;
use App\Http\Controllers\client\MyAcountController;
use App\Http\Controllers\client\SearchController;
use App\Http\Controllers\ImageController;
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
    Route::post('filter/{genreList}', [FilterController::class, 'filter'])->name('games.filter'); //filter cho trang games
});
Route::get('login', function () {
    $response = ['errorCode' => 401, 'message' => 'Unauthenticated'];
    return response()->json($response, 401);
})->name('login');
Route::prefix('/')->group(function () {
    Route::get('home', [HomeController::class, 'index'])->name('clients.home'); //trang home
    Route::get('search/{key}', [SearchController::class, 'getSearchAjax'])->name('search'); //lấy search
    Route::post('/member/register', [MembersController::class, 'register']);
    Route::post('/member/login', [MembersController::class, 'login']);
});
Route::prefix('cart')->group(function () {
    Route::get('', [ShoppingController::class, 'index'])->name('cart.index'); //san phẩm trong cart
    Route::post('add/{id}', [ShoppingController::class, 'add'])->name('cart.add'); // thêm sản phẩm trong cart
    Route::get('delete/{id}', [ShoppingController::class, 'delete'])->name('cart.delete'); //delete cart
    Route::post('purchase', [ShoppingController::class, 'purchase'])->name('cart.purchase'); //thanh toán
    Route::post('purchaseNow/{id}', [ShoppingController::class, 'purchaseNow'])->name('cart.purchaseNow'); //mua ngay
    Route::post('myAccount', [MyAcountController::class, 'orders'])->name('cart.orders'); //xem hóa đơn
});
//Route::group(['middleware' => 'auth:sanctum'], function () {
Route::prefix('admin')->group(function () {
    Route::get('/', [AdminHomeController::class, 'index'])->name('admin.home'); //dữ liệu trang admin Home
    Route::get('/user', [AdminHomeController::class, 'user'])->name('admin.user'); //trang user
    Route::get('/game', [GameController::class, 'index'])->name('admin.game.games'); //trang admin game
    Route::post('/game/store', [GameController::class, 'store'])->name('admin.game.store'); //thêm game
    Route::delete('/game/delete/{id}', [GameController::class, 'delete'])->name('admin.game.delete'); //xóa game
    Route::get('game/edit/{id}', [GameController::class, 'edit'])->name('admin.game.edit'); //trang edit game
    Route::put('game/update/{id}', [GameController::class, 'update'])->name('admin.game.update'); //edit game
    Route::get('game/create', [GameController::class, 'create'])->name('admin.game.create'); //trang tạo game
    Route::get('genre', [GenresController::class, 'index'])->name('admin.genre.genres'); //trang chứa bản thể loại
    Route::post('genre/store', [GenresController::class, 'addGenres'])->name('admin.genres.store'); //trang thêm thể loại
    Route::get('genre/create', [GenresController::class, 'create'])->name('admin.genre.create'); //trang input thêm thể loại
    Route::get('genre/edit/{id}', [GenresController::class, 'edit'])->name('admin.genre.edit'); //trang sữa thể loại
    Route::put('genre/update/{id}', [GenresController::class, 'update'])->name('admin.genre.update'); //update thể loại
    Route::delete('/genre/delete/{id}', [GenresController::class, 'delete'])->name('admin.genre.delete'); //xóa thể loại
    Route::get('/profile', [ProfitController::class, 'index'])->name('admin.profit.index'); //trang profit
});
//});
