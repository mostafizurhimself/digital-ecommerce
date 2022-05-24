<?php

namespace App\Models;

class Vat extends Model
{

    /**
     * The relations to eager load on every query.
     *
     * @var array
     */
    protected $with = ['country'];


    /**
     * Get default vat settings
     */
    public static function default()
    {
        return [
            'amount'  => 0,
            'type'    => '%',
        ];
    }

    /**
     * Get the Country that owns the Vat
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function country()
    {
        return $this->belongsTo(Country::class);
    }
}