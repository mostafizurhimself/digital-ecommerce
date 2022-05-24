<?php

namespace App\Models;

use Akaunting\Money\Money;
use Akaunting\Money\Currency;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class PreviewDesign extends Model implements HasMedia
{
    use InteractsWithMedia;

    /**
     * The relations to eager load on every query.
     *
     * @var array
     */
    protected $with = ['vehicle', 'vehicleModel', 'customer', 'product'];

    /**
     * The accessors to append to the model's array form.
     *
     * @var array
     */
    protected $appends = [
        'depositAmountFormatted', 'dateFormatted', 'customerAmountFormatted',
        'grandTotalFormatted', 'customerGrandTotalFormatted', 'vatAmountFormatted', 'customerVatAmountFormatted',
        'downloadableMedia', 'thumbnailMedia', 'mediaCollection', 'downloadableMediaUrl', 'thumbnailMediaUrl',
    ];

    /**
     * Register the media collections
     *
     * @return void
     */
    public function registerMediaCollections(): void
    {
        $this
            ->addMediaCollection('thumbnail')
            ->singleFile();
        $this
            ->addMediaCollection('downloadable')
            ->singleFile();
        $this
            ->addMediaCollection('collection');
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
    public function vehicle()
    {
        return $this->belongsTo(Vehicle::class);
    }

    /**
     * Determines one-to-many relation
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function vehicleModel()
    {
        return $this->belongsTo(VehicleModel::class);
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
    public function getDepositAmountFormattedAttribute()
    {
        $value = new Money(ceil($this->depositAmount), new Currency("EUR"), true);
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
     * Get the downloadable media
     */
    public function getDownloadableMediaAttribute()
    {
        return $this->getFirstMedia('downloadable') ?? null;
    }

    /**
     * Get the thumbnail media
     */
    public function getThumbnailMediaAttribute()
    {
        return $this->getFirstMedia('thumbnail') ?? null;
    }

    /**
     * Get the downloadable media
     */
    public function getDownloadableMediaUrlAttribute()
    {
        return $this->getFirstMediaUrl('downloadable') ?? null;
    }

    /**
     * Get the thumbnail media
     */
    public function getThumbnailMediaUrlAttribute()
    {
        return $this->getFirstMediaUrl('thumbnail') ?? null;
    }

    /**
     * Get the media collection
     */
    public function getMediaCollectionAttribute()
    {
        $result = [];
        foreach ($this->getMedia('collection') as $media) {
            array_push($result, ['id' => $media->id, 'name' => $media->name, 'fileName' => $media->file_name,  'url' => $media->getFullUrl(), 'mimeType' => $media->mime_type]);
        }

        return $result;
    }
}