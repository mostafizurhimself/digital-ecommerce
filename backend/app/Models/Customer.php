<?php

namespace App\Models;

use App\Enums\VatType;
use App\Traits\Sortable;
use App\Enums\AddressType;
use App\Enums\ActiveStatus;
use App\Traits\CamelCasing;
use EloquentFilter\Filterable;
use Spatie\MediaLibrary\HasMedia;
use Tymon\JWTAuth\Contracts\JWTSubject;
use Illuminate\Notifications\Notifiable;
use Spatie\MediaLibrary\InteractsWithMedia;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use ChristianKuri\LaravelFavorite\Traits\Favoriteability;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Customer extends Authenticatable implements JWTSubject, HasMedia
{
    use HasFactory, Notifiable, CamelCasing, SoftDeletes, Filterable, Sortable, Favoriteability, InteractsWithMedia;

    /**
     * The attributes that are not mass assignable.
     *
     * @var array
     */
    protected $guarded = [];

    /**
     * The attributes that should be mutated to dates.
     *
     * @var array
     */
    protected $dates = ['last_login'];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The relations to eager load on every query.
     *
     * @var array
     */
    // protected $with = ['company'];


    /**
     * The accessors to append to the model's array form.
     *
     * @var array
     */
    protected $appends = ['billingAddress', 'shippingAddress', 'lastLoginFormatted', 'profilePhotoUrl', 'vat'];

    /**
     * Register the media collections
     *
     * @return void
     */
    public function registerMediaCollections(): void
    {
        $this->addMediaCollection('profile-photo')->singleFile();
    }

    /**
     * Get the identifier that will be stored in the subject claim of the JWT.
     *
     * @return mixed
     */
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    /**
     * Return a key value array, containing any custom claims to be added to the JWT.
     *
     * @return array
     */
    public function getJWTCustomClaims()
    {
        return [];
    }

    /**
     * Override the mail body for reset password notification mail.
     */
    public function sendPasswordResetNotification($token)
    {
        $this->notify(new \App\Notifications\ResetPasswordNotification($token));
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
     * Get all of the orderItems for the Customer
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasManyThrough
     */
    public function orderItems()
    {
        return $this->hasManyThrough(OrderItem::class, Order::class);
    }

    /**
     * Get the company associated with the Customer
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function company()
    {
        return $this->hasOne(Company::class);
    }

    /**
     * Scope a query to only active customers.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeActive($query)
    {
        return $query->where('status', ActiveStatus::ACTIVE());
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
     * Get last login as formatted
     */
    public function getLastLoginFormattedAttribute()
    {
        return $this->lastLogin ? $this->lastLogin->diffForHumans() : null;
    }

    /**
     * Get the profile-photo media
     */
    public function getProfilePhotoUrlAttribute()
    {
        return $this->getFirstMediaUrl('profile-photo') ?? null;
    }

    /**
     * Get vat amount attribute
     * 
     * @return double
     */
    public function getVatAttribute()
    {
        return Vat::whereHas('country', function ($country) {
            return $country->where('name', $this->billingAddress->country);
        })->first() ?? Vat::default();
    }
}