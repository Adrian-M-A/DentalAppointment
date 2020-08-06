<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Timepicker extends Model
{
    protected $fillable = ['hour', 'day', 'month', 'year', 'available', 'user_id'];
    
    public function user()
    {
        return $this->belongsTo('App\User');
    }
}
