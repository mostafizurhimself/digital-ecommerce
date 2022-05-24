<?php

namespace App\Http\Controllers;

use App\Models\Faq;
use Inertia\Inertia;
use App\Enums\FaqType;
use App\Models\Settings;
use App\Models\Appearance;
use Illuminate\Http\Request;
use App\Enums\AppearanceType;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;

class OtherPageController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('Appearance/Others/Index', [
            'faqTypes'   => FaqType::toSelectOptions(),
            'faqs'       => Faq::orderBy('id', 'desc')->get(),
            'terms'      => Appearance::where('name', AppearanceType::TERMS_CONDITIONS())->first() ?? null,
            'howItWorks' => Appearance::where('name', AppearanceType::HOW_IT_WORKS_PAGE())->first() ?? null,
        ]);
    }
    /**
     * Save Terms & Conditions Settings
     */
    public function termsCondition(Request $request)
    {
        // dd($request->all());
        $request->validate([
            'title'    => 'required|string|max:200',
            // 'subtitle' => 'required|string|max:200',
            'general'  => 'required|string',
            'special'  => 'required|string',
            'license'  => 'required|string',
            'privacy'  => 'required|string',

        ]);

        DB::transaction(function () use ($request) {
            Appearance::updateOrCreate(
                [
                    'name' => AppearanceType::TERMS_CONDITIONS()
                ],
                [
                    'data' => [
                        'title'    => $request->title,
                        // 'subtitle' => $request->subtitle,
                        'general'  => $request->general,
                        'special'  => $request->special,
                        'license'  => $request->license,
                        'privacy'  => $request->privacy,
                    ]
                ]
            );
        });

        session()->flash('flash.banner', 'Terms & Conditions updated successfullly.');
        session()->flash('flash.bannerStyle', 'success');

        return redirect()->route('appearance.others');
    }

    /**
     * Save Terms & Conditions Settings
     */
    public function howItWork(Request $request)
    {
        // dd($request->all());
        $request->validate([
            'title'    => 'required|string|max:200',
            'subtitle' => 'required|string|max:200',
            'customer'  =>  'required|string',
            'universal'  =>  'required|string',


        ]);

        DB::transaction(function () use ($request) {
            Appearance::updateOrCreate(
                [
                    'name' => AppearanceType::HOW_IT_WORKS_PAGE()
                ],
                [
                    'data' => [
                        'title'    => $request->title,
                        'subtitle' => $request->subtitle,
                        'customer'  => $request->customer,
                        'universal'  => $request->universal,
                    ]
                ]
            );
        });

        session()->flash('flash.banner', 'How it work content updated successfullly.');
        session()->flash('flash.bannerStyle', 'success');

        return redirect()->route('appearance.others');
    }
}
