<?php

namespace App\Models;

use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class Settings extends Model implements HasMedia
{
    use InteractsWithMedia;

    /**
     * The attributes that should be cast.
     *
     * @var array
     */
    protected $casts = [
        'data' => 'array',
    ];

    /**
     * The accessors to append to the model's array form.
     *
     * @var array
     */
    protected $appends = ['primaryMedia', 'primaryMediaUrl', 'secondaryMedia', 'secondaryMediaUrl'];

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

        $this
            ->addMediaCollection('secondary')
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
     * Get the primary url
     */
    public function getPrimaryMediaUrlAttribute()
    {
        return $this->getFirstMediaUrl('primary') ?? null;
    }

    /**
     * Get the secondary media
     */
    public function getSecondaryMediaAttribute()
    {
        return $this->getFirstMedia('secondary') ?? null;
    }

    /**
     * Get the secondary media
     */
    public function getSecondaryMediaUrlAttribute()
    {
        return $this->getFirstMediaUrl('secondary') ?? null;
    }
}