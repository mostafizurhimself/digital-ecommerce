<?php

namespace Database\Factories;

use App\Enums\Enum;
use App\Models\Tag;
use App\Models\Color;
use App\Enums\Bodywork;
use App\Models\Product;
use App\Models\Vehicle;
use App\Models\Category;
use App\Models\Customer;
use App\Models\CustomOrder;
use Illuminate\Support\Arr;
use App\Models\VehicleModel;
use Illuminate\Database\Eloquent\Factories\Factory;

class CustomOrderFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = CustomOrder::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'customer_id' => $this->faker->randomElement(Customer::pluck('id')->toArray()),
            'vehicle_id' => $this->faker->randomElement(Vehicle::pluck('id')->toArray()),
            'vehicle_model_id'=> function($attributes){
                $vehicle = Vehicle::find($attributes['vehicle_id']);
                return $this->faker->randomElement($vehicle->vehicleModels()->pluck('id')->toArray());
            },
            'bodywork'=> $this->faker->randomElement(Bodywork::toArray()),
            'vehicleManufactureYear' =>  $this->faker->randomElement(['2018', '2019', '2012', '2020', '2021']),
            'vehicleColor'=>$this->faker->hexcolor,
            'vehicleNote' => $this->faker->sentence(),
            'notConditioned'=>$this->faker->randomElement([1, 0]),
            'designNote' =>$this->faker->sentence(),
            'category_id' => $this->faker->randomElement(Category::pluck('id')->toArray()),
            'rangeFrom' => $this->faker->numberBetween(1, 100) * 10,
            'rangeTo' => $this->faker->numberBetween(1, 100) * 10,
            'depositAmount' => $this->faker->numberBetween(1, 100) * 10,
            'customerAmount' => $this->faker->numberBetween(1, 100) * 10,
            'customerCurrency' => $this->faker->randomElement(['USD', 'EUR']),
            'vat'=> $this->faker->numberBetween(1, 1) * 10,
            'vat_type'=> $this->faker->randomElement(['%']),
            'vat_amount'=>$this->faker->numberBetween(1, 100) * 10,
            'customer_vat_amount'=> $this->faker->numberBetween(1, 100) * 10,
            'grand_total'=> $this->faker->numberBetween(1, 100) * 10,
            'customer_grand_total'=> $this->faker->numberBetween(1, 100) * 10,



        ];
    }


       /**
     * Configure the model factory.
     *
     * @return $this
     */
    public function configure()
    {
        return $this->afterMaking(function (CustomOrder $order) {
            //
        })->afterCreating(function (CustomOrder $order) {

            $order->addMediaFromUrl(asset('images/cars/car-'.$this->faker->numberBetween(1, 10).'.jpg'))->toMediaCollection('vehicle_photos');
            $order->addMediaFromUrl(asset('images/cars/car-'.$this->faker->numberBetween(1, 10).'.jpg'))->toMediaCollection('vehicle_photos');
            $order->addMediaFromUrl(asset('images/cars/car-'.$this->faker->numberBetween(1, 10).'.jpg'))->toMediaCollection('vehicle_photos');
            $order->addMediaFromUrl(asset('images/cars/car-'.$this->faker->numberBetween(1, 10).'.jpg'))->toMediaCollection('reference_designs');
            $order->addMediaFromUrl(asset('images/cars/car-'.$this->faker->numberBetween(1, 10).'.jpg'))->toMediaCollection('reference_designs');
            $order->addMediaFromUrl(asset('images/cars/car-'.$this->faker->numberBetween(1, 10).'.jpg'))->toMediaCollection('reference_designs');


            $tags = Tag::pluck('id')->toArray();
            // Attach tags
            $order->tags()->sync(Arr::random($tags, 3));

            $colors = Color::pluck('id')->toArray();
            // Attach color
            $order->colors()->sync(Arr::random($colors, 3));

            $products = Product::pluck('id')->toArray();
            // Attach Product
            $order->products()->sync(Arr::random($products, 3));

        });
    }
}
