<?php

namespace App\Enums;

/**
 * @method static OrderStatus PROCESSING()
 * @method static OrderStatus COMPLETED()
 */
class OrderStatus extends Enum
{
    private const PROCESSING = 'processing';
    private const COMPLETED  = 'completed';
}
