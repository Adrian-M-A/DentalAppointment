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
    Route::get('logout', 'UserController@logout')->middleware('auth:api');
});

Route::prefix('appointment')->group(function(){
    Route::middleware('auth:api')->group(function () {
        Route::get('/my-appointment', 'TimepickerController@myAppointment');
        Route::get('/available', 'TimepickerController@available');
        Route::put('/{id}', 'TimepickerController@update');
        Route::put('cancel/{id}', 'TimepickerController@cancel');
    });
    Route::post('', 'TimepickerController@create');
    Route::get('', 'TimepickerController@getAll');
    Route::delete('/{id}', 'TimepickerController@delete');
});
