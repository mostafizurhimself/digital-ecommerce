<?php

namespace Database\Seeders;

use App\Models\CustomOrder;
use Illuminate\Database\Seeder;

class CustomOrderSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        CustomOrder::factory()->count(20)->create();
    }
}
