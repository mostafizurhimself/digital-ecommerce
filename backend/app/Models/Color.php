<?php

namespace App\Models;

use App\Traits\Trashed;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class Color extends Model implements HasMedia
{
    use InteractsWithMedia;

    /**
     * The attributes that should be cast.
     *
     * @var array
     */
    protected $casts = [
        'is_gradient' => 'boolean',
    ];

    /**
     * The accessors to append to the model's array form.
     *
     * @var array
     */
    protected $appends = ['primaryMedia', 'primaryMediaUrl'];

    /**
     * Get all of the products for the Color
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function products()
    {
        return $this->hasMany(Product::class);
    }

    /**
     * Register the media collections
     *
     * @return void
     */
    public function registerMediaCollections(): void
    {
        $this
            ->addMediaCollection('primary')
            ->singleFile();
    }

    /**
     * Get the primary media
     */
    public function getPrimaryMediaAttribute()
    {
        return $this->getFirstMedia('primary') ?? null;
    }

    /**
     * Get the primary media
     */
    public function getPrimaryMediaUrlAttribute()
    {
        return $this->getFirstMediaUrl('primary') ?? null;
    }
}
