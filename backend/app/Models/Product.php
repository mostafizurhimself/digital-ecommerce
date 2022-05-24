<?php

namespace App\Models;

use App\Traits\Trashed;
use Spatie\MediaLibrary\HasMedia;
use Illuminate\Support\Facades\DB;
use Spatie\MediaLibrary\InteractsWithMedia;
use Illuminate\Database\Eloquent\SoftDeletes;
use ChristianKuri\LaravelFavorite\Traits\Favoriteable;

class Product extends Model implements HasMedia
{
    use SoftDeletes, Trashed, InteractsWithMedia, Favoriteable;

    /**
     * Set the default sort citeria
     * 
     * @var array
     */
    protected $defaultSortCriteria = ['created_at,desc'];

    /**
     * The relations to eager load on every query.
     *
     * @var array
     */
    protected $with = ['category', 'color'];


    /**
     * The accessors to append to the model's array form.
     *
     * @var array
     */
    protected $appends = [
        'downloadableMedia', 'thumbnailMedia', 'mediaCollection',
        'downloadableMediaUrl', 'thumbnailMediaUrl', 'totalFavouritesCount',
        'isFavourite', 'totalCommentCount',
    ];

    /**
     * Register the media collections
     *
     * @return void
     */
    public function registerMediaCollections(): void
    {
        $this
            ->addMediaCollection('downloadable')
            ->singleFile();

        $this
            ->addMediaCollection('thumbnail')
            ->singleFile();

        $this
            ->addMediaCollection('collection');
    }

    /**
     * Get the Category that owns the Product
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    /**
     * Get the Color that owns the Product
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function color()
    {
        return $this->belongsTo(Color::class);
    }


    /**
     * The tags that belong to the Product
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function tags()
    {
        return $this->belongsToMany(Tag::class, 'product_tag', 'product_id', 'tag_id');
    }

    /**
     * Get all of the product's comments.
     */
    public function comments()
    {
        return $this->morphMany(Comment::class, 'commentable');
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
     * Determines one-to-many relation
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function colorChanges()
    {
        return $this->hasMany(ColorChange::class);
    }

    /**
     * Determines one-to-many relation
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function previewDesigns()
    {
        return $this->hasMany(PreviewDesign::class);
    }

    /**
     * The customOrders that belong to the CustomOrder
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function customOrders()
    {
        return $this->belongsToMany(CustomOrder::class, 'custom_order_products', 'product_id', 'custom_order_id');
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

    /**
     * Get total favourite amount
     */
    public function getTotalFavouritesCountAttribute()
    {
        return $this->favorites()->count();
    }

    /**
     * Check is favourite for the current user or not
     */
    public function getIsFavouriteAttribute()
    {
        return $this->isFavorited();
    }

    /**
     * Get total comments count
     */
    public function getTotalCommentCountAttribute()
    {
        return $this->comments()->count();
    }

    /**
     * Get the sortable logic for specific citeria
     *
     * @param  Illuminate\Database\Eloquent\Builder query
     * @param  direction
     * @return query
     */
    public function sortPopular($query, $direction)
    {
        return $query->withCount('orderItems')->orderBy('order_items_count', 'desc');
    }

    /**
     * Get the sortable logic for specific citeria
     *
     * @param  Illuminate\Database\Eloquent\Builder query
     * @param  direction
     * @return query
     */
    public function sortComment($query, $direction)
    {
        return $query->withCount('comments')->orderBy('comments_count', 'desc');
    }

    /**
     * Get the sortable logic for specific citeria
     *
     * @param  Illuminate\Database\Eloquent\Builder query
     * @param  direction
     * @return query
     */
    public function sortView($query, $direction)
    {
        return $query->orderBy('total_view', 'desc');
    }
}