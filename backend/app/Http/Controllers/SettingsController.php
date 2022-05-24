<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Settings;
use App\Enums\SettingsType;
use App\Enums\VatType;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

use function GuzzleHttp\Promise\all;

class SettingsController extends Controller
{
    /**
     * Get the settings page
     */
    public function index()
    {
        return Inertia::render('Settings/Index', [
            'website'  => Settings::where('name', SettingsType::WEBSITE())->first() ?? null,
            'vat'      => Settings::where('name', SettingsType::VAT())->first() ?? null,
            'vatTypes' => VatType::toSelectOptions()
        ]);
    }

    /**
     * Save settings details
     */
    public function website(Request $request)
    {
        $request->validate([
            'name'        => 'required|string|max:100',
            'description' => 'required|string|max:100',
            'logoLight'   => 'nullable|image|mimes:jpg,jpeg,png|max:5000',
            'logoDark'    => 'nullable|image|mimes:jpg,jpeg,png|max:5000',
            'phone'       => 'required|string|max:200',
            'email'       => 'required|email',
            'street'      => 'required|string|max:200',
            'city'        => 'required|string|max:100',
            'zip'         => 'required|string|max:10',
            'country'     => 'required|string|max:50',
            'vatNo'       => 'nullable|string|vat_number',
        ]);

        DB::transaction(function () use ($request) {
            $website = Settings::updateOrCreate(
                [
                    'name' => SettingsType::WEBSITE()
                ],
                [
                    'data' => [
                        'name'        => $request->name,
                        'description' => $request->description,
                        'phone'       => $request->phone,
                        'email'       => $request->email,
                        'street'      => $request->street,
                        'city'        => $request->city,
                        'zip'         => $request->zip,
                        'country'     => $request->country,
                        'vatNo'       => $request->vatNo,
                    ]
                ]
            );

            if ($request->file('logoLight')) {
                $website->addMedia($request->logoLight)->toMediaCollection('primary');
            }

            if ($request->file('logoDark')) {
                $website->addMedia($request->logoDark)->toMediaCollection('secondary');
            }
        });

        session()->flash('flash.banner', 'Website settings updated successfullly.');
        session()->flash('flash.bannerStyle', 'success');

        return redirect()->route('settings');
    }

    /**
     * Save Vat Settings
     */
    public function vat(Request $request)
    {
        // dd($request->all());
        $request->validate([
            'amount'  => 'required|integer|max:100',
            'type'    => 'required',
        ]);

        DB::transaction(function () use ($request) {
            Settings::updateOrCreate(
                [
                    'name' => SettingsType::VAT()
                ],
                [
                    'data' => [
                        'amount' => $request->amount,
                        'type'    => $request->type,
                    ]
                ]
            );
        });

        session()->flash('flash.banner', 'VAT settings updated successfullly.');
        session()->flash('flash.bannerStyle', 'success');

        return redirect()->route('settings');
    }
}