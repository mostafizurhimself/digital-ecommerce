<?php

namespace Database\Factories;

use App\Models\Customer;
use App\Enums\AddressType;
use Illuminate\Database\Eloquent\Factories\Factory;

class CustomerFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Customer::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->name,
            'surname' => $this->faker->lastName,
            'nickname' => $this->faker->firstName,
            'email' => $this->faker->safeEmail,
            'phone' => $this->faker->phoneNumber,
            'password' => bcrypt(111111),
            'company_name' => $this->faker->company,
        ];
    }

    /**
     * Configure the model factory.
     *
     * @return $this
     */
    public function configure()
    {
        return $this->afterMaking(function (Customer $customer) {
            //
        })->afterCreating(function (Customer $customer) {
            // Create billing address
            $customer->address()->create([
                'type'      => AddressType::BILLING_ADDRESS(),
                'street'    => $this->faker->streetAddress,
                'city'      => $this->faker->city,
                'zipcode'   => $this->faker->postcode,
                'country'   => $this->faker->country,
            ]);

             // Create shipping address
             $customer->address()->create([
                'type'      => AddressType::SHIPPING_ADDRESS(),
                'street'    => $this->faker->streetAddress,
                'city'      => $this->faker->city,
                'zipcode'   => $this->faker->postcode,
                'country'   => $this->faker->country,
            ]);
        });
    }
}
