<?php

namespace Database\Seeders;

use App\Models\Tag;
use Illuminate\Database\Seeder;

class TagSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Tag::updateOrCreate(
            [
                'name' => 'Abstract'
            ]
        );
        Tag::updateOrCreate(
            [
                'name' => 'Animal'
            ]
        );
        Tag::updateOrCreate(
            [
                'name' => 'Art'
            ]
        );
        Tag::updateOrCreate(
            [
                'name' => 'Brand'
            ]
        );
        Tag::updateOrCreate(
            [
                'name' => 'Camouflage'
            ]
        );
        Tag::updateOrCreate(
            [
                'name' => 'Characters'
            ]
        );
        Tag::updateOrCreate(
            [
                'name' => 'Female'
            ]
        );
        Tag::updateOrCreate(
            [
                'name' => 'Limited Editon'
            ]
        );
        Tag::updateOrCreate(
            [
                'name' => 'Luxury'
            ]
        );
        Tag::updateOrCreate(
            [
                'name' => 'Nature'
            ]
        );
        Tag::updateOrCreate(
            [
                'name' => 'Other'
            ]
        );
    }
}
