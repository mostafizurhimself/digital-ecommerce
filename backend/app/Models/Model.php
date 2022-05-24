<?php

namespace App\Models;

use App\Traits\Sortable;
use App\Traits\CamelCasing;
use EloquentFilter\Filterable;
use Illuminate\Database\Eloquent\Model as BaseModel;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Model extends BaseModel
{
    use HasFactory, CamelCasing, Filterable, Sortable;


    /**
     * The number of models to return for pagination.
     *
     * @var int
     */
    protected $perPage = 25;

    /**
     * The attributes that are not mass assignable.
     *
     * @var array
     */
    protected $guarded = [];

    /**
     * Available sortable fields
     *
     * @var array
     */
    public $sortable = ['*'];
}