<?php

namespace Database\Seeders;

use App\Models\ColorChange;
use Illuminate\Database\Seeder;

class ColorChangeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        ColorChange::factory()->count(50)->create();
    }
}