<?php

namespace Database\Factories;

use App\Models\Color;
use App\Models\Product;
use App\Models\Category;
use App\Models\Tag;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Arr;

class ProductFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Product::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'category_id' => $this->faker->randomElement(Category::pluck('id')->toArray()),
            'color_id' => $this->faker->randomElement(Color::pluck('id')->toArray()),
            'name' => Str::title($this->faker->word),
            'sku' => $this->faker->randomNumber(),
            'price' => $this->faker->numberBetween(1, 100) * 10,
            'description' => $this->faker->paragraph,
            'note' => $this->faker->paragraph,
            'print_data_format' => 'PDF',
            'recommended_material' => 'Leather',
        ];
    }

    /**
     * Configure the model factory.
     *
     * @return $this
     */
    public function configure()
    {
        return $this->afterMaking(function (Product $product) {
            //
        })->afterCreating(function (Product $product) {
            $product->addMediaFromUrl(asset('images/cars/car-' . $this->faker->numberBetween(1, 10) . '.jpg'))->toMediaCollection('thumbnail');
            $product->addMediaFromUrl(asset('downloadable.zip'))->toMediaCollection('downloadable');
            $product->addMediaFromUrl(asset('images/cars/car-' . $this->faker->numberBetween(1, 10) . '.jpg'))->toMediaCollection('collection');
            $product->addMediaFromUrl(asset('images/cars/car-' . $this->faker->numberBetween(1, 10) . '.jpg'))->toMediaCollection('collection');
            $product->addMediaFromUrl(asset('images/cars/car-' . $this->faker->numberBetween(1, 10) . '.jpg'))->toMediaCollection('collection');
            $product->addMediaFromUrl(asset('images/cars/car-' . $this->faker->numberBetween(1, 10) . '.jpg'))->toMediaCollection('collection');
            $product->addMediaFromUrl(asset('images/cars/car-' . $this->faker->numberBetween(1, 10) . '.jpg'))->toMediaCollection('collection');
            $product->addMediaFromUrl(asset('images/cars/car-' . $this->faker->numberBetween(1, 10) . '.jpg'))->toMediaCollection('collection');
            $product->addMediaFromUrl(asset('images/cars/car-' . $this->faker->numberBetween(1, 10) . '.jpg'))->toMediaCollection('collection');
            $product->addMediaFromUrl(asset('images/cars/car-' . $this->faker->numberBetween(1, 10) . '.jpg'))->toMediaCollection('collection');
            $product->addMediaFromUrl(asset('images/cars/car-' . $this->faker->numberBetween(1, 10) . '.jpg'))->toMediaCollection('collection');
            $product->addMediaFromUrl(asset('images/cars/car-' . $this->faker->numberBetween(1, 10) . '.jpg'))->toMediaCollection('collection');

            $tags = Tag::pluck('id')->toArray();
            // Attach tags
            $product->tags()->sync(Arr::random($tags, 5));
        });
    }
}