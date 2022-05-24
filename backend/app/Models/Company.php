<?php

namespace App\Models;

use App\Enums\AddressType;


class Company extends Model
{

    /**
     * The relations to eager load on every query.
     *
     * @var array
     */
    protected $with = ['customer'];


    /**
     * The accessors to append to the model's array form.
     *
     * @var array
     */
    protected $appends = ['billingAddress', 'shippingAddress', 'memberSinceFormatted'];

    /**
     * Determines one-to-many relation
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function customer()
    {
        return $this->belongsTo(Customer::class);
    }

    /**
     * Get the supplier address
     *
     * @return \Illuminate\Database\Eloquent\Relations\MorphMany
     */
    public function address()
    {
        return $this->morphMany(Address::class, 'addressable');
    }

    /**
     * Get billing address attribute
     *
     * @return mixed
     */
    public function getBillingAddressAttribute()
    {
        if ($this->address()->exists()) {
            return $this->address()->where('type', AddressType::BILLING_ADDRESS())->first();
        }
    }

    /**
     * Get shipping address attribute
     *
     * @return mixed
     */
    public function getShippingAddressAttribute()
    {
        if ($this->address()->exists()) {
            return $this->address()->where('type', AddressType::SHIPPING_ADDRESS())->first();
        }
    }

    /**
     * Get date as formated
     */
    public function getMemberSinceFormattedAttribute()
    {
        return $this->createdAt->format('Y-m-d h:i A');
    }
}
