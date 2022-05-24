<?php

namespace App\Enums;

/**
 * @method static Bodywork SEDAN()
 * @method static Bodywork COMBI()
 * @method static Bodywork LIFTBACK()
 * @method static Bodywork COUPE()
 * @method static Bodywork HATCHBACK()
 * @method static Bodywork PICKUP()
 * @method static Bodywork VAN()
 * @method static Bodywork SUV()
 * @method static Bodywork CONVERTIBLE()
 */
class Bodywork extends Enum
{
    private const SEDAN       = 'Sedan';
    private const COMBI       = 'Combi';
    private const LIFTBACK    = 'Liftback';
    private const COUPE       = 'Coupé';
    private const HATCHBACK   = 'Hatchback';
    private const PICKUP      = 'Pickup';
    private const VAN         = 'Van';
    private const SUV         = 'SUV';
    private const CONVERTIBLE = 'Convertible';
}
