<?php

use App\Http\Controllers\Api\ComicController;
use App\Http\Controllers\Api\SweetController;
use App\Http\Controllers\Api\WrapperController;
use App\Http\Controllers\Api\BestsellerController;
use App\Http\Controllers\UnauthOrderController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::get('comics', [ComicController::class, 'index']);
Route::get('sweets', [SweetController::class, 'index']);
Route::get('wrappers', [WrapperController::class, 'index']);
Route::get('bestsellers', [BestsellerController::class, 'index']);
Route::get('unauthorder', [UnauthOrderController::class, 'store']);