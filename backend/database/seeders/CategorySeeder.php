<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\Category::factory(5)->create();

        Category::updateOrCreate(
            [
                'name' => "Full Wrap",
            ],
            [
                'description' => "This is a description"
            ]
        );

        Category::updateOrCreate(
            [
                'name' => "Partial Wrap",
            ],
            [
                'description' => "This is a description"
            ]
        );

        Category::updateOrCreate(
            [
                'name' => "Stripe",
            ],
            [
                'description' => "This is a description"
            ]
        );
    }
}
