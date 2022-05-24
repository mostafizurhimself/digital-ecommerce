<?php

namespace Database\Seeders;

use App\Models\Appearance;
use App\Enums\AppearanceType;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AppearanceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */


    public function run()
    {
        //  Hero section seeder
        DB::transaction(function () {
            $hero = Appearance::updateOrCreate(
                [
                    'name' => AppearanceType::HERO()
                ],
                [
                    'data' => [
                        'title'    => "CHANGE YOUR LIFE",
                        'subtitle' => "CHANGE YOUR CAR",
                    ]
                ]
            );

            $hero->addMediaFromUrl(asset('videos/wrapstock-home-full.mp4'))->toMediaCollection('primary');

            $hero->addMediaFromUrl(asset('images/home/hero-poster.jpg'))->toMediaCollection('secondary');
        });

        //Design section Seeder
        DB::transaction(function () {

            $design = Appearance::updateOrCreate(
                [
                    'name' => AppearanceType::DESIGN()
                ],
                [
                    'data' => [
                        'title'    => "WRAPMOTIF",
                        'subtitle' => "DESIGNS READY TO DOWNLOAD 24/7",
                        'description' => "You have neither a designer nor the time to find one. We have a simple solution for you. Simply select from our catalog, loaded with awesome designs. Don't be mistaken – designs can be modified to every vehicle. Download the printing data and you can start wrapping today! No designer, no problem."
                    ]
                ]
            );

            $design->addMediaFromUrl(asset('images/home/hero-poster.jpg'))->toMediaCollection('primary');

        });

         //Custom section Seeder
        DB::transaction(function () {

            $custom = Appearance::updateOrCreate(
                [
                    'name' => AppearanceType::CUSTOM()
                ],
                [
                    'data' => [
                        'title'    => "CUSTOM DESIGN",
                        'subtitle' => "GET YOUR OWN DESIGN",
                        'description' => "Do you want something completely unique? Our designers can design a one-of-a-kind wrap that will make your car the center of attention. So let's get to it! Tell us what you're after and leave the rest on us. Each such project is a challenge for us. We were born to create originals."
                    ]
                ]
            );

            $custom->addMediaFromUrl(asset('images/home/design-poster.jpg'))->toMediaCollection('primary');

        });

        // Partner section Seeder
        DB::transaction(function () {

            $partner = Appearance::updateOrCreate(
                [
                    'name' => AppearanceType::PARTNER()
                ],
                [
                    'data' => [
                        'title'    => "WRAP YOUR CAR",
                        'subtitle' => "WE OFFER DESIGNS, BUT WHO IS GONNA WRAP YOUR CAR?",
                        'description' => "Find a wrapping company nearby you and let them wrap a car with a design of your choice. We have gathered all our partners for you."
                    ]
                ]
            );

            $partner->addMediaFromUrl(asset('images/home/wrapping-company.jpg'))->toMediaCollection('primary');



        });

        // How It Works section Seeder
        DB::transaction(function () {

            $howItWorks = Appearance::updateOrCreate(
                [
                    'name' => AppearanceType::HOW_IT_WORKS()
                ],
                [
                    'data' => []
                ]
            );

            $howItWorks->addMediaFromUrl(asset('images/home/wrapping-company.jpg'))->toMediaCollection('primary');
        });

    }
}







