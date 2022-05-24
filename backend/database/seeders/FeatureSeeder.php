<?php

namespace Database\Seeders;

use App\Models\Feature;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class FeatureSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Feature Section Seeder

        DB::transaction(function () {

            $feature = Feature::create(
                [
                    'title'       => "",
                    'subtitle'    => "",
                ]
            );

            $feature->addMedia(asset(''))->toMediaCollection('primary');



        });
    }
}
