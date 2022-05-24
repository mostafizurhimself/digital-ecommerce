<?php

namespace App\Models;

use App\Enums\VatType;
use App\Facades\Helper;
use App\Traits\Trashed;
use Akaunting\Money\Money;
use Akaunting\Money\Currency;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Illuminate\Database\Eloquent\SoftDeletes;
use AmrShawky\LaravelCurrency\Facade\Currency as CurrencyConverter;

class Order extends Model implements HasMedia
{
    use SoftDeletes, Trashed, InteractsWithMedia;

    /**
     * The attributes that should be mutated to dates.
     *
     * @var array
     */
    protected $dates = ['date'];

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
    protected $appends = [
        'totalAmountFormatted', 'dateFormatted', 'customerAmountFormatted', 'grandTotalFormatted',
        'customerGrandTotalFormatted', 'vatAmountFormatted', 'customerVatAmountFormatted',
        'invoiceNo', 'downloadMediaUrl', 'totalDiscountFormatted', 'customerTotalDiscountFormatted'
    ];

    /**
     * Register the media collections
     *
     * @return void
     */
    public function registerMediaCollections(): void
    {
        $this->addMediaCollection('download');
    }

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
     * Determines one-to-many relation
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function orderItems()
    {
        return $this->hasMany(OrderItem::class);
    }

    /**
     * Update order total amount
     */
    public function updateTotalAmount()
    {
        $this->totalAmount = $this->orderItems()->sum('amount');
        $this->save();
    }

    /**
     * Update customer  amount
     */
    public function updateCustomerAmount()
    {
        $this->customerAmount = $this->orderItems()->sum('customer_amount');
        $this->save();
    }

    /**
     * Update vat amount
     */
    public function updateVatAmount()
    {
        if ($this->vatType == VatType::PERCENTAGE()) {
            $this->vatAmount = Helper::calculatePercentageValue($this->vat, $this->totalAmount);
        } else {
            $this->vatAmount = $this->vat;
        }
        $this->save();
    }

    /**
     * Update customer vat amount
     */
    public function updateCustomerVatAmount()
    {
        $vatAmount =
            CurrencyConverter::convert()->from("EUR")->to($this->customerCurrency)->amount($this->vatAmount)->round(2)->get();
        $this->customerVatAmount = ceil($vatAmount);
        $this->save();
    }

    /**
     * Update grand total
     */
    public function updateGrandTotal()
    {
        $this->grandTotal = $this->totalAmount + $this->vatAmount;
        $this->save();
    }

    /**
     * Update customer grand total
     */
    public function updateCustomerGrandTotal()
    {
        $this->customerGrandTotal = $this->customerTotal + $this->customerVatAmount;
        $this->save();
    }


    /**
     * Get the customer amount as formated
     */
    public function getCustomerAmountFormattedAttribute()
    {
        $value = new Money(ceil($this->customerAmount), new Currency($this->customerCurrency), true);
        return $value->formatWithoutZeroes();
    }

    /**
     * Get the Total  amount as formated
     */
    public function getTotalAmountFormattedAttribute()
    {
        $value = new Money(ceil($this->totalAmount), new Currency("EUR"), true);
        return $value->formatWithoutZeroes();
    }

    /**
     * Get the vat  amount as formated
     */
    public function getVatAmountFormattedAttribute()
    {
        $value = new Money(ceil($this->vatAmount), new Currency("EUR"), true);
        return $value->formatWithoutZeroes();
    }

    /**
     * Get the customer vat amount as formated
     */
    public function getCustomerVatAmountFormattedAttribute()
    {
        $value = new Money(ceil($this->customerVatAmount), new Currency($this->customerCurrency), true);
        return $value->formatWithoutZeroes();
    }

    /**
     * Get the total discount  amount as formated
     */
    public function getTotalDiscountFormattedAttribute()
    {
        $value = new Money(ceil($this->totalDiscount), new Currency("EUR"), true);
        return $value->formatWithoutZeroes();
    }

    /**
     * Get the customer total discount amount as formated
     */
    public function getCustomerTotalDiscountFormattedAttribute()
    {
        $value = new Money(ceil($this->customerTotalDiscount), new Currency($this->customerCurrency), true);
        return $value->formatWithoutZeroes();
    }

    /**
     * Get the Total  amount as formated
     */
    public function getGrandTotalFormattedAttribute()
    {
        $value = new Money(ceil($this->grandTotal), new Currency("EUR"), true);
        return $value->formatWithoutZeroes();
    }


    /**
     * Get the customer amount as formated
     */
    public function getCustomerGrandTotalFormattedAttribute()
    {
        $value = new Money(ceil($this->customerGrandTotal), new Currency($this->customerCurrency), true);
        return $value->formatWithoutZeroes();
    }

    /**
     * Get date as formated
     */
    public function getDateFormattedAttribute()
    {
        return $this->createdAt->format('Y-m-d h:i A');
    }

    /**
     * Get the invoice no attribute
     * 
     * @return string
     */
    public function getInvoiceNoAttribute()
    {
        return "WM" . $this->date->format('yd') . $this->id;
    }

    /**
     * Get the downloadable media
     */
    public function getDownloadMediaUrlAttribute()
    {
        return $this->getFirstMediaUrl('download') ?? null;
    }

    /**
     * Scope a query to only include popular users.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeCustomerFilter($query)
    {
        return $query->where('customer_id', auth()->user()->id);
    }
}