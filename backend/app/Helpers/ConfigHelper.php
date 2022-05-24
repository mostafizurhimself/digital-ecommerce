<?php

namespace App\Helpers;

use Illuminate\Support\Str;

class ConfigHelper
{
    /**
     * @return array
     */
    protected $enums = [
        \App\Enums\Bodywork::class,
        \App\Enums\Service::class,
    ];

    /**
     * Get all enums as select option
     *
     * @param array
     * @return array
     */
    public function getEnums()
    {
        $result = [];
        foreach ($this->enums as $enum) {
            $result[Str::camel(class_basename($enum))] = $enum::toArray();
        }

        return $result;
    }


    /**
     * Get all enums as select option
     *
     * @param array
     * @return array
     */
    public function getOptions()
    {
        $result = [];
        foreach ($this->enums as $enum) {
            $result[Str::camel(class_basename($enum))] = $enum::toSelectOptions();
        }

        return $result;
    }
}
