<?php

namespace Database\Seeders;

use App\Models\Vehicle;
use App\Models\VehicleModel;
use Illuminate\Database\Seeder;


class VehicleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Vehicle::factory()->count(50)->has(VehicleModel::factory()->count(4))->create();
    }
}
