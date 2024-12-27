<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Messages extends Model
{

    protected $table = 'message';
    protected $primaryKey = 'message_id';
    protected $fillable = [
        'message_id',
        'from',
        'to',
        'message'
    ];
}
