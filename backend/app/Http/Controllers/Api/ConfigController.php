<?php

namespace App\Http\Controllers\Api;

use App\Models\Slider;
use App\Models\Feature;
use App\Models\Settings;
use App\Models\Appearance;
use App\Facades\ConfigHelper;
use App\Http\Resources\ApiResource;
use App\Http\Controllers\Controller;

class ConfigController extends Controller
{
    /**
     * Get the appearances and settings
     */
    public function index()
    {
        $data = [
            'appearances'   => Appearance::all(),
            'features'      => Feature::all(),
            'settings'      => Settings::all(),
            'sliders'       => Slider::all(),
            'enums'         => ConfigHelper::getEnums(),
            'options'       => ConfigHelper::getOptions(),
        ];

        return new ApiResource($data);
    }
}
