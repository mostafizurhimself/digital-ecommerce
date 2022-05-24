<?php

namespace App\Enums;

/**
 * @method static FaqType CUSTOMER()
 * @method static FaqType COMPANY()
 */
class FaqType extends Enum
{
    private const CUSTOMER = 'customer';
    private const COMPANY  = 'wrapping_company';
}
