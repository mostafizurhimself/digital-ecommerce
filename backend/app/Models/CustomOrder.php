<?php

namespace App\Models;

use Akaunting\Money\Money;
use Akaunting\Money\Currency;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class CustomOrder extends Model implements HasMedia
{

    use InteractsWithMedia;

    /**
     * The relations to eager load on every query.
     *
     * @var array
     */
    protected $with = ['customer', 'vehicle', 'vehicleModel', 'product'];

    /**
     * The attributes that should be cast.
     *
     * @var array
     */
    protected $casts = [
        'not_conditioned' => 'boolean',
    ];

    /**
     * Register the media collections
     *
     * @return void
     */
    public function registerMediaCollections(): void
    {
        $this->addMediaCollection('vehicle_photos');
        $this->addMediaCollection('reference_designs');
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
     * The accessors to append to the model's array form.
     *
     * @var array
     */
    protected $appends = [
        'referenceDesignUrls', 'vehiclePhotoUrls', 'customerAmountFormatted', 'depositAmountFormatted',
        'dateFormatted', 'rangeFromFormatted', 'rangeToFormatted', 'grandTotalFormatted', 'customerGrandTotalFormatted',
        'vatAmountFormatted', 'customerVatAmountFormatted'
    ];

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
     * The colors that belong to the CustomOrder
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function colors()
    {
        return $this->belongsToMany(Color::class, 'custom_order_colors', 'custom_order_id', 'color_id');
    }

    /**
     * The tags that belong to the CustomOrder
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function tags()
    {
        return $this->belongsToMany(Tag::class, 'custom_order_tags', 'custom_order_id', 'tag_id');
    }

    /**
     * The products that belong to the CustomOrder
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function products()
    {
        return $this->belongsToMany(Product::class, 'custom_order_products', 'custom_order_id', 'product_id');
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
     * Get the Deposit amount as formated
     */
    public function getDepositAmountFormattedAttribute()
    {
        $value = new Money(ceil($this->depositAmount), new Currency($this->customerCurrency), true);
        return $value->formatWithoutZeroes();
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
     * Get the Range from amount as formated
     */
    public function getRangeFromFormattedAttribute()
    {
        $value = new Money(ceil($this->rangeFrom), new Currency($this->customerCurrency), true);
        return $value->formatWithoutZeroes();
    }


    /**
     * Get the Range To amount as formated
     */
    public function getRangeToFormattedAttribute()
    {
        $value = new Money(ceil($this->rangeTo), new Currency($this->customerCurrency), true);
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
     * Get the reference design media urls
     */
    public function getReferenceDesignUrlsAttribute()
    {
        $result = [];
        foreach ($this->getMedia('reference_designs') as $media) {
            array_push($result, ['id' => $media->id, 'name' => $media->file_name,  'url' => $media->getFullUrl(), 'mime_type' => $media->mime_type]);
        }

        return $result;
    }

    /**
     * Get the vehicle photos urls
     */
    public function getVehiclePhotoUrlsAttribute()
    {
        $result = [];
        foreach ($this->getMedia('vehicle_photos') as $media) {
            array_push($result, ['id' => $media->id, 'name' => $media->file_name,  'url' => $media->getFullUrl(), 'mime_type' => $media->mime_type]);
        }

        return $result;
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