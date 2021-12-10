<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CatController;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::prefix('cats')->group(function () {
    Route::get('/',[ CatController::class, 'getAll']);
    Route::post('/',[ CatController::class, 'create']);
    Route::delete('/{id}',[ CatController::class, 'delete']);
    Route::get('/{id}',[ CatController::class, 'get']);
    Route::put('/{id}',[ CatController::class, 'update']);
});
