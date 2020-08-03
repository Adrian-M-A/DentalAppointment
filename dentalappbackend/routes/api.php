<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::prefix('user')->group(function(){
    Route::post('signup', 'UserController@signup');
    Route::post('login', 'UserController@login');
});

Route::prefix('appointment')->group(function(){
    Route::post('', 'TimepickerController@create');
    Route::get('', 'TimepickerController@available');
    Route::get('/{id}', 'TimepickerController@myAppointment');
    Route::put('{id}', 'TimepickerController@update');
    Route::delete('/{id}', 'TimepickerController@delete');
});
