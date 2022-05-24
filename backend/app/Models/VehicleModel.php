<?php

namespace App\Models;

use App\Traits\Trashed;
use Illuminate\Database\Eloquent\SoftDeletes;

class VehicleModel extends Model
{
    /**
     * Determines one-to-many relation
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function customOrders()
    {
        return $this->hasMany(CustomOrder::class);
    }

    /**
     * Determines one-to-many relation
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function previewDesigns()
    {
        return $this->hasMany(PreviewDesign::class);
    }
}