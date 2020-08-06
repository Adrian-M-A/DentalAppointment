<?php

namespace App\Http\Controllers;

use App\Timepicker;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class TimepickerController extends Controller
{
    public function create(Request $request)
    {
        $body = $request->all();
        $validator = Validator::make($body, [
            'hour' => 'required|string',
            'day' => 'required|string',
            'month' => 'required|string',
            'year' => 'required|string',
            'available' => 'required|boolean'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => 'There was a problem trying to create the appointment.',
                'errors' => $validator->errors()
            ], 400);
        }

        $appointment = Timepicker::create($body);
        return $appointment;
    }

    public function getAll()
    {
        return Timepicker::with('user')->get();
    }

    public function myAppointment()
    {
        $user_id = Auth::id();
        $appointment = Timepicker::where('user_id', $user_id)->with('user')->get();
        return $appointment;
    }

    public function available()
    {
        $appointment = Timepicker::where('available', true)->get();
        return $appointment;
    }

    public function update(Request $request, $id)
    {
        $body = $request->all();
        $validator = Validator::make($body, [
            'hour' => 'required|string',
            'day' => 'required|string',
            'month' => 'required|string',
            'year' => 'required|string',
            'available' => 'required|boolean'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => 'There was a problem trying to update the appointment.',
                'errors' => $validator->errors()
            ], 400);
        }

        $appointment = Timepicker::find($id);
        $body['user_id'] = Auth::id();
        $appointment->update($body);
        return $appointment;
    }

    public function delete($id)
    {
        $appointment = Timepicker::find($id);
        $appointment->delete();
        return response()->json(['message' => 'Appointment successfully deleted', 'appointment' => $appointment]);
    }

}
