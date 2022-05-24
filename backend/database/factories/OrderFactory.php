<?php

namespace Database\Factories;

use App\Models\Order;
use App\Models\Product;
use App\Models\Customer;
use Illuminate\Support\Arr;
use Illuminate\Database\Eloquent\Factories\Factory;

class OrderFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Order::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'date' => $this->faker->date('Y-m-d', 'now'),
            'customer_id' => $this->faker->randomElement(Customer::pluck('id')->toArray()),
            'customer_currency' => $this->faker->randomElement(['USD', 'EUR']),
            'vat'=> $this->faker->numberBetween(1, 1) * 10,
            'vat_type'=> $this->faker->randomElement(['%']),
            'vat_amount'=>$this->faker->numberBetween(1, 100) * 10,
            'grand_total'=> $this->faker->numberBetween(1, 100) * 10,
            'total_amount'=> $this->faker->numberBetween(1, 100) * 10,
            'customer_amount'=> $this->faker->numberBetween(1, 100) * 10,
            'customer_grand_total'=> $this->faker->numberBetween(1, 100) * 10,
        ];
    }
}
