<?php

namespace Database\Seeders;

use App\Models\Tag;
use App\Models\Product;
use Illuminate\Support\Arr;
use Illuminate\Database\Seeder;

class ProductTagSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $tags = Tag::pluck('id')->toArray();

        $products = Product::all();
        // Attach tags
        foreach ($products as $product) {
            $product->tags()->sync(Arr::random($tags, 5));
        }
    }
}
