<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Feature;
use App\Models\Appearance;
use Illuminate\Http\Request;
use App\Enums\AppearanceType;
use Illuminate\Support\Facades\DB;

class HomePageController extends Controller
{
    /**
     * Get the home page appearance
     */
    public function index()
    {
        return Inertia::render('Appearance/Home/Index', [
            'hero'     => Appearance::where('name', AppearanceType::HERO())->first() ?? null,
            'features' => Feature::all(),
            'design'   => Appearance::where('name', AppearanceType::DESIGN())->first() ?? null,
            'custom'   => Appearance::where('name', AppearanceType::CUSTOM())->first() ?? null,
            'partner'  => Appearance::where('name', AppearanceType::PARTNER())->first() ?? null,
            'howItWorks'  => Appearance::where('name', AppearanceType::HOW_IT_WORKS())->first() ?? null,
            'welcome'  => Appearance::where('name', AppearanceType::WELCOME_TEXT())->first() ?? null,
        ]);
    }


    /**
     * Save hero section page settings
     */
    public function hero(Request $request)
    {
        $request->validate([
            'title'    => 'required|string|max:100',
            'subtitle' => 'required|string|max:100',
            'video'    => 'nullable|mimes:mp4,mov,ogg,avi|max:30720',
            'poster'   => 'nullable|image|mimes:jpg,jpeg,png|max:10240',
        ]);

        DB::transaction(function () use ($request) {
            $hero = Appearance::updateOrCreate(
                [
                    'name' => AppearanceType::HERO()
                ],
                [
                    'data' => [
                        'title'    => $request->title,
                        'subtitle' => $request->subtitle,
                    ]
                ]
            );

            if ($request->file('video')) {
                $hero->addMedia($request->video)->toMediaCollection('primary');
            }


            if ($request->file('poster')) {
                $hero->addMedia($request->poster)->toMediaCollection('secondary');
            }
        });

        session()->flash('flash.banner', 'Updated successfullly.');
        session()->flash('flash.bannerStyle', 'success');

        return redirect()->route('appearance.home');
    }


    /**
     * Save custom design section page settings
     */
    public function welcome(Request $request)
    {
        $request->validate([
            'title'       => 'required|string|max:300',
            'description' => 'required|string|max:500',
        ]);

        DB::transaction(function () use ($request) {
            $design = Appearance::updateOrCreate(
                [
                    'name' => AppearanceType::WELCOME_TEXT()
                ],
                [
                    'data' => [
                        'title'       => $request->title,
                        'description' => $request->description,
                    ]
                ]
            );
        });

        session()->flash('flash.banner', 'Updated successfullly.');
        session()->flash('flash.bannerStyle', 'success');

        return redirect()->route('appearance.home');
    }

    /**
     * Save design section page settings
     */
    public function design(Request $request)
    {
        $request->validate([
            'title'       => 'required|string|max:100',
            'subtitle'    => 'required|string|max:100',
            'description' => 'required|string|max:500',
            'banner'      => 'nullable|image|mimes:jpg,jpeg,png|max:5120',
        ]);

        DB::transaction(function () use ($request) {
            $design = Appearance::updateOrCreate(
                [
                    'name' => AppearanceType::DESIGN()
                ],
                [
                    'data' => [
                        'title'       => $request->title,
                        'subtitle'    => $request->subtitle,
                        'description' => $request->description,
                    ]
                ]
            );

            if ($request->file('banner')) {
                $design->addMedia($request->banner)->toMediaCollection('primary');
            }
        });

        session()->flash('flash.banner', 'Updated successfullly.');
        session()->flash('flash.bannerStyle', 'success');

        return redirect()->route('appearance.home');
    }

    /**
     * Save custom design section page settings
     */
    public function custom(Request $request)
    {
        $request->validate([
            'title'       => 'required|string|max:100',
            'subtitle'    => 'required|string|max:100',
            'description' => 'required|string|max:500',
            'banner'      => 'nullable|image|mimes:jpg,jpeg,png|max:5120',
        ]);

        DB::transaction(function () use ($request) {
            $design = Appearance::updateOrCreate(
                [
                    'name' => AppearanceType::CUSTOM()
                ],
                [
                    'data' => [
                        'title'       => $request->title,
                        'subtitle'    => $request->subtitle,
                        'description' => $request->description,
                    ]
                ]
            );

            if ($request->file('banner')) {
                $design->addMedia($request->banner)->toMediaCollection('primary');
            }
        });

        session()->flash('flash.banner', 'Updated successfullly.');
        session()->flash('flash.bannerStyle', 'success');

        return redirect()->route('appearance.home');
    }


    /**
     * Save partner section page settings
     */
    public function partner(Request $request)
    {
        $request->validate([
            'title'       => 'required|string|max:100',
            'subtitle'    => 'required|string|max:100',
            'description' => 'required|string|max:500',
            'show'        => 'required',
            'banner'      => 'nullable|image|mimes:jpg,jpeg,png|max:5120',
        ]);

        DB::transaction(function () use ($request) {
            $partner = Appearance::updateOrCreate(
                [
                    'name' => AppearanceType::PARTNER()
                ],
                [
                    'data' => [
                        'title'       => $request->title,
                        'subtitle'    => $request->subtitle,
                        'description' => $request->description,
                        'show'        => $request->show,
                    ]
                ]
            );

            if ($request->file('banner')) {
                $partner->addMedia($request->banner)->toMediaCollection('primary');
            }
        });

        session()->flash('flash.banner', 'Updated successfullly.');
        session()->flash('flash.bannerStyle', 'success');

        return redirect()->route('appearance.home');
    }

    /**
     * Save how it works section
     */
    public function howItWorks(Request $request)
    {
        $request->validate([
            'image' => 'nullable|mimes:jpg,jpeg,png|max:5120'
        ]);

        DB::transaction(function () use ($request) {
            $howItWorks = Appearance::updateOrCreate(
                [
                    'name' => AppearanceType::HOW_IT_WORKS()
                ],
                [
                    'data' => []
                ]
            );


            if ($request->hasFile('image')) {
                $howItWorks->addMedia($request->image)->toMediaCollection('primary');
            }
        });

        session()->flash('flash.banner', 'Updated successfullly.');
        session()->flash('flash.bannerStyle', 'success');

        return redirect()->route('appearance.home');
    }
}
