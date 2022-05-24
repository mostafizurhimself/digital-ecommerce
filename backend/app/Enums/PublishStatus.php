<?php

namespace App\Enums;

/**
 * @method static PublishStatus PUBLISHED()
 * @method static PublishStatus UNPUBLISHED()
 */
class PublishStatus extends Enum
{
    private const PUBLISHED   = 'published';
    private const UNPUBLISHED = 'unpublished';
}
