<?php

namespace Database\Factories;

use App\Models\Product;
use App\Models\Customer;
use App\Models\ColorChange;
use Illuminate\Database\Eloquent\Factories\Factory;

class ColorChangeFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = ColorChange::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'date'       => $this->faker->date('Y-m-d'),
            'customerId' => $this->faker->randomElement(Customer::pluck('id')->toArray()),
            'productId'  => $this->faker->randomElement(Product::pluck('id')->toArray()),
            'colors'     => [
                [
                    'colorCode' => $this->faker->hexColor,
                    'description' => $this->faker->sentence()
                ],
                [
                    'colorCode' => $this->faker->hexColor,
                    'description' => $this->faker->sentence()
                ]
            ],
            'description'   => $this->faker->sentence(),
            'depositAmount' => $this->faker->numberBetween(1, 10) * 10,
            'customerAmount' => $this->faker->numberBetween(1, 10) * 10,
            'customerCurrency' => $this->faker->randomElement(['EUR', 'USD'])
        ];
    }
}