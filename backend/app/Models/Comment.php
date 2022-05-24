<?php

namespace App\Models;


class Comment extends Model
{
    /**
     * The relations to eager load on every query.
     *
     * @var array
     */
    protected $with = ['customer', 'commentable'];

    /**
     * The accessors to append to the model's array form.
     *
     * @var array
     */
    protected $appends = ['commentedAt'];

    /**
     * Get the parent commentable model.
     */
    public function commentable()
    {
        return $this->morphTo();
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
     * Get commented at attribute
     */
    public function getCommentedAtAttribute()
    {
        return $this->createdAt->format('Y-m-d H:i A');
    }
}