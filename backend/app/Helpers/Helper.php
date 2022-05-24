<?php

namespace App\Helpers;

use Carbon\Carbon;
use App\Models\Settings;
use Carbon\CarbonPeriod;
use App\Enums\SettingsType;
use App\Models\UnitConversion;

class Helper
{
    /**
     * Get all date between two dates
     *
     * @return array
     */
    public function getAllDates($start, $end)
    {
        $start = Carbon::parse($start);
        $end = Carbon::parse($end);
        $dateRange = CarbonPeriod::create($start, $end);

        $dates = [];
        foreach ($dateRange as $date) {
            $dates[] = $date->format('Y-m-d');
        }

        return $dates;
    }

    /**
     * Get the application name
     * 
     * @return string
     */
    public function getAppName()
    {
        return Settings::where('name', SettingsType::WEBSITE())->first() ? Settings::where('name', SettingsType::WEBSITE())->first()->data['name'] ?? config('app.name') : config('app.name');
    }

    /**
     * Get the application email
     * 
     * @return string
     */
    public function getAppEmail()
    {
        return Settings::where('name', SettingsType::WEBSITE())->first() ? Settings::where('name', SettingsType::WEBSITE())->first()->data['email'] ?? "support@yourcompany.com" : "support@yourcompany.com";
    }

    /**
     * Get the application street address
     * 
     * @return string
     */
    public function getStreet()
    {
        return Settings::where('name', SettingsType::WEBSITE())->first() ? Settings::where('name', SettingsType::WEBSITE())->first()->data['street'] ?? null : null;
    }

    /**
     * Get the application city address
     * 
     * @return string
     */
    public function getCity()
    {
        return Settings::where('name', SettingsType::WEBSITE())->first() ? Settings::where('name', SettingsType::WEBSITE())->first()->data['city'] ?? null : null;
    }

    /**
     * Get the application zipcode address
     * 
     * @return string
     */
    public function getZipcode()
    {
        return Settings::where('name', SettingsType::WEBSITE())->first() ? Settings::where('name', SettingsType::WEBSITE())->first()->data['zip'] ?? null : null;
    }

    /**
     * Get the application street address
     * 
     * @return string
     */
    public function getCountry()
    {
        return Settings::where('name', SettingsType::WEBSITE())->first() ? Settings::where('name', SettingsType::WEBSITE())->first()->data['country'] ?? null : null;
    }

    /**
     * Get the application light logo
     * 
     * @return string
     */
    public function getLightLogo()
    {
        return Settings::where('name', SettingsType::WEBSITE())->first() ? Settings::where('name', SettingsType::WEBSITE())->first()->primaryMediaUrl : null;
    }

    /**
     * Get the application dark logo
     * 
     * @return string
     */
    public function getDarkLogo()
    {
        return Settings::where('name', SettingsType::WEBSITE())->first() ? Settings::where('name', SettingsType::WEBSITE())->first()->secondaryMediaUrl : null;
    }

    /**
     * Calculate percentage
     *
     * @return double
     */
    public static function calculatePercentage($amount, $total)
    {
        return round(($amount / $total) * 100, 2);
    }

    /**
     * Calculate percentage value
     *
     * @return double
     */
    public static function calculatePercentageValue($percent, $total)
    {
        return round(($percent / 100) * $total, 2);
    }

    // or use a function
    public function ddcors(...$args)
    {
        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Methods: *');
        header('Access-Control-Allow-Headers: *');
        dd(...$args);
    }
}