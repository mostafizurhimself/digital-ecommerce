<?php

namespace App\Filters;

class CompanyFilter extends Filter
{
    /**
     * Related Models that have ModelFilters as well as the method on the ModelFilter
     * As [relationMethod => [input_key1, input_key2]].
     *
     * @var array
     */
    public $searchRelations = [
        'customer' => ['name'],
        'address'  => ['city', 'country', 'zipcode']
    ];

    /**
     * Searchable columns of the table
     *
     * @var array
     */
    public $searchColumns = ['id', 'company_name', 'company_email'];
}