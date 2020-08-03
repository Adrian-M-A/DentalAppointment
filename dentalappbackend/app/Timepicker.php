<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Timepicker extends Model
{
    protected $fillable = ['day', 'month', 'year', 'user_id'];
    
    public function user()
    {
        return $this->belongsTo('App\User');
    }
}
