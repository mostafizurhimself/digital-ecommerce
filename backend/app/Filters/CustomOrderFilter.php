<?php

namespace App\Filters;

class CustomOrderFilter extends Filter
{
    /**
     * Related Models that have ModelFilters as well as the method on the ModelFilter
     * As [relationMethod => [input_key1, input_key2]].
     *
     * @var array
     */
    public $searchRelations = [
        'customer' => ['name']
    ];

    /**
     * Searchable columns of the table
     *
     * @var array
     */
    public $searchColumns = ['id', 'deposit_amount'];

    // /**
    //  * Where created at is greater than
    //  */
    // public function from($value)
    // {
    //     return $this->orWhere('created_at', '>=', $value);
    // }

    // /**
    //  * Where created at is less than
    //  */
    // public function to($value)
    // {
    //     return $this->orWhere('created_at', '=<', $value);
    // }
}