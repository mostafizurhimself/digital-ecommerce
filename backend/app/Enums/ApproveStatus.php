<?php

namespace App\Enums;

/**
 * @method static ApproveStatus PENDING()
 * @method static ApproveStatus APPROVED()
 * @method static ApproveStatus REJECTED()
 */
class ApproveStatus extends Enum
{
    private const PENDING  = 'pending';
    private const APPROVED = 'approved';
    private const REJECTED = 'rejected';
}