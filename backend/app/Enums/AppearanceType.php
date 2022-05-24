<?php

namespace App\Enums;

/**
 * @method static AppearanceType HERO()
 * @method static AppearanceType DESIGN()
 * @method static AppearanceType CUSTOM()
 * @method static AppearanceType PARTNER()
 * @method static AppearanceType HOW_IT_WORKS()
 * @method static AppearanceType HOW_IT_WORKS_PAGE()
 * @method static AppearanceType PARTNER_PAGE()
 * @method static AppearanceType WELCOME_TEXT()
 * @method static AppearanceType CUSTOM_ORDER()
 */
class AppearanceType extends Enum
{
    private const HERO               = 'hero';
    private const DESIGN             = 'design';
    private const CUSTOM             = 'custom';
    private const PARTNER            = 'partner';
    private const HOW_IT_WORKS       = 'how_it_works';
    private const TERMS_CONDITIONS   = 'terms_conditions';
    private const HOW_IT_WORKS_PAGE  = 'how_it_works_page';
    private const PARTNER_PAGE       = 'partner_page';
    private const WELCOME_TEXT       = 'welcome_text';
    private const CUSTOM_ORDER       = 'custom_order';


}
