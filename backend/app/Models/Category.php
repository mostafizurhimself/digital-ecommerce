<?php

namespace App\Models;

use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class Category extends Model implements HasMedia
{
    use InteractsWithMedia;

    /**
     * Get all of the products for the Category
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function products()
    {
        return $this->hasMany(Product::class);
    }

    /**
     * The accessors to append to the model's array form.
     *
     * @var array
     */
    protected $appends = ['primaryMedia', 'primaryMediaUrl', 'mediaCollection',];

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
            ->addMediaCollection('collection');
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