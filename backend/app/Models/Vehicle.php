<?php

namespace App\Models;

use App\Traits\Trashed;
use Illuminate\Database\Eloquent\SoftDeletes;

class Vehicle extends Model
{

    /**
     * Get all of the vehicleModels for the Vehicle
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function vehicleModels()
    {
        return $this->hasMany(VehicleModel::class);
    }
}
