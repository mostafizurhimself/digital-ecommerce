<?php

namespace App\Enums;

/**
 * @method static CompleteStatus PENDING()
 * @method static CompleteStatus COMPLETED()
 */
class CompleteStatus extends Enum
{
    private const PENDING   = 'pending';
    private const COMPLETED = 'completed';
}