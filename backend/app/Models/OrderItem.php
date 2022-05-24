<?php

namespace App\Models;

use App\Traits\Trashed;
use Akaunting\Money\Money;
use Akaunting\Money\Currency;
use Illuminate\Database\Eloquent\SoftDeletes;
use AmrShawky\LaravelCurrency\Facade\Currency as CurrencyConverter;
use Carbon\Carbon;

class OrderItem extends Model
{
    use SoftDeletes, Trashed;


    /**
     * The relations to eager load on every query.
     *
     * @var array
     */
    protected $with = ['product', 'colorChange'];

    /**
     * The accessors to append to the model's array form.
     *
     * @var array
     */
    protected $appends = ['customerAmountFormatted', 'amountFormatted', 'age'];

    /**
     * Determines one-to-many relation
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function product()
    {
        return $this->belongsTo(Product::class);
    }

    /**
     * Determines one-to-many relation
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function colorChange()
    {
        return $this->belongsTo(ColorChange::class);
    }


    /**
     * Determines one-to-many relation
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function order()
    {
        return $this->belongsTo(Order::class);
    }

    /**
     * Get the customer amount as formated
     */
    public function getCustomerAmountFormattedAttribute()
    {
        $value = new Money(ceil($this->customerAmount), new Currency($this->order->customerCurrency), true);
        return $value->formatWithoutZeroes();
    }

    /**
     * Get the Total  amount as formated
     */
    public function getAmountFormattedAttribute()
    {
        $value = new Money(ceil($this->amount), new Currency("EUR"), true);
        return $value->formatWithoutZeroes();
    }

    /**
     * Get the age attribute
     * 
     * @return string
     */
    public function getAgeAttribute()
    {
        return Carbon::parse($this->order->date)->age;
    }
}