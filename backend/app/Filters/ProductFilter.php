<?php

namespace App\Filters;

class ProductFilter extends Filter
{
    /**
     * Related Models that have ModelFilters as well as the method on the ModelFilter
     * As [relationMethod => [input_key1, input_key2]].
     *
     * @var array
     */
    public $searchRelations = [];

    /**
     * Searchable columns of the table
     *
     * @var array
     */
    public $searchColumns = ['name', 'sku', 'id'];

    /**
     * Category filter
     */
    public function categories($ids)
    {
        $ids = explode(',', $ids);
        return $this->whereIn('category_id', $ids);
    }

    /**
     * Color filter
     */
    public function colors($ids)
    {
        $ids = explode(',', $ids);
        return $this->whereIn('color_id', $ids);
    }

    /**
     * Tags filter
     */
    public function tags($ids)
    {
        $ids = explode(',', $ids);
        return $this->whereHas('tags', function ($tag) use ($ids) {
            return $tag->whereIn('id', $ids);
        });
    }
}