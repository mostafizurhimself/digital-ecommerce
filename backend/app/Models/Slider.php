<?php

namespace App\Models;

use App\Traits\Trashed;
use Illuminate\Database\Eloquent\SoftDeletes;

class Slider extends Model
{
    const DESIGNS_PAGE_SLIDER = 'designs_page_slider';
    const CUSTOM_PAGE_SLIDER  = 'custom_page_slider';

    /**
     * The relations to eager load on every query.
     *
     * @var array
     */
    protected $with = ['slides'];

    /**
     * Determines one-to-many relation
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function slides()
    {
       return $this->hasMany(Slide::class);
    }
}
