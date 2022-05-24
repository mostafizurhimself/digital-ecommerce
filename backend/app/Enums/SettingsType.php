<?php

namespace App\Enums;

/**
 * @method static SettingsType WEBSITE()
 * @method static SettingsType VAT()
 * @method static SettingsType TERMS_CONDITIONS()
 * @method static SettingsType HOW_IT_WORKS()
 */
class SettingsType extends Enum
{
    private const WEBSITE            = 'website';
    private const VAT                = 'vat';
}