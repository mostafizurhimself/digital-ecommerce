<?php

namespace App\Models;

use App\Traits\Trashed;
use EloquentFilter\Filterable;
use Illuminate\Database\Eloquent\SoftDeletes;

class Address extends Model
{
    use SoftDeletes, Filterable, Trashed;

      /**
     * The attributes that should be cast.
     *
     * @var array
     */
    protected $casts = [
        'position' => 'array',
    ];

    /**
     * Get the owning addressable model.
     */
    public function addressable()
    {
        return $this->morphTo();
    }
}
