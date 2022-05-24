<?php

namespace App\Models;

use App\Traits\Trashed;
use Illuminate\Database\Eloquent\SoftDeletes;

class Contact extends Model
{
    use SoftDeletes, Trashed;

    /**
     * The attributes that should be cast.
     *
     * @var array
     */
    protected $casts = [
        'answered' => 'boolean',
    ];
}