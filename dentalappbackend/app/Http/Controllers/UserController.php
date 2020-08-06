<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    public function signup(Request $request)
    {
        $body = $request->all();
        $validator = Validator::make($body, [
            'name' => 'required|string|regex:/[a-zA-Z]/',
            'surnames' => 'required|string|regex:/[a-zA-Z]/',
            'phone' => 'required|string|regex:/[0-9]{9}/',
            'email' => 'required|unique:users',
            'password' => 'required|string'
        ]);
        if($validator->fails()) {
            return response()->json([
                'errors' => $validator->errors(),
                'message' => 'There was a problem trying to register user.'
            ], 400);
        }

        $body['password'] = Hash ::make($body['password']);
        return User::create($body);
    }
    
    public function login(Request $request)
    {
        $credentials = $request->only('email','password');
        if(!Auth::attempt($credentials)) {
            return response()->json(['message' =>'Wrong credentials'], 400);
        }
        $user =Auth::user();
        $token = $user->createToken('authtoken')->accessToken;
        return response()->json(['token' => $token, 'user' => $user], 200);
    }

    public function logout(Request $request){
        $request->user()->token()->revoke();
        return response([
            'message' => 'User successfully logged out.'
        ]);
    }
}
