<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\TowingRequestController;
use App\Http\Controllers\API\AuthController;


Route::get('/requests', [TowingRequestController::class, 'index']);
Route::post('/requests', [TowingRequestController::class, 'store']);
Route::get('/test', function () {
    return response()->json(['message' => 'API working']);
});
Route::put('/requests/{id}/assign', [TowingRequestController::class, 'assign']);
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
