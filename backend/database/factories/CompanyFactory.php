<?php

namespace Database\Factories;

use App\Models\Company;
use App\Models\Customer;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Factories\Factory;

class CompanyFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Company::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'customer_id' => $this->faker->randomElement(Customer::pluck('id')->toArray()),
            'company_name'=>Str::title($this->faker->company),
            'company_email'=>$this->faker->safeEmail,
            'company_website'=>$this->faker->domainName(),
            'service'=>$this->faker->sentence(),
        ];
    }
}
