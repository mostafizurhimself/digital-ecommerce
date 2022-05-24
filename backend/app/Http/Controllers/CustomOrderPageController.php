<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Slide;
use App\Models\Slider;
use App\Models\Appearance;
use Illuminate\Http\Request;
use App\Enums\AppearanceType;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;

class CustomOrderPageController extends Controller
{
    /**
     * Get the Custom order page settings view
     */
    public function index()
    {
        return Inertia::render('Appearance/CustomOrders/Index', [
            'slider' => Slider::where('name', Slider::CUSTOM_PAGE_SLIDER)->first() ?? null,
            'banner' => Appearance::where('name', AppearanceType::CUSTOM_ORDER())->first() ?? null,
        ]);
    }

    /**
     * Add slide to Custom order page slider
     */
    public function add(Request $request)
    {
        $request->validate([
            'title'    => 'required|string|max:100',
            'subtitle' => 'required|string|max:100',
            'image'    => 'required|image|max:10240|mimes:jpg,jpeg,png',
        ]);

        DB::transaction(function () use ($request) {
            $slider = Slider::updateOrCreate(
                [
                    'name' => Slider::CUSTOM_PAGE_SLIDER
                ]
            );

            $slide = $slider->slides()->create([
                'title'    => $request->title,
                'subtitle' => $request->subtitle,

            ]);

            if ($request->hasFile('image')) {
                $slide->addMedia($request->image)->toMediaCollection('primary');
            }
        });

        session()->flash('flash.banner', 'Slide added successfullly.');
        session()->flash('flash.bannerStyle', 'success');

        return redirect()->route('appearance.custom-orders');
    }


    /**
     * Edit Custom page Slide
     */
    public function edit(Request $request, Slide $slide)
    {
        $request->validate([
            'title'    => 'required|string|max:100',
            'subtitle' => 'required|string|max:100',
            'image'    => 'nullable|image|max:10240|mimes:jpg,jpeg,png',
        ]);

        DB::transaction(function () use ($slide, $request) {
            $slide->update([
                'title'    => $request->title,
                'subtitle' => $request->subtitle,
            ]);

            if ($request->hasFile('image')) {
                $slide->addMedia($request->image)->toMediaCollection('primary');
            }
        });

        session()->flash('flash.banner', 'Updated successfullly.');
        session()->flash('flash.bannerStyle', 'success');
        return redirect()->route('appearance.custom-orders');
    }

    /**
     * Delete Custom Order slide
     */
    public function delete(Slide $slide)
    {
        if ($slide->delete()) {
            session()->flash('flash.banner', 'Deleted successfullly.');
            session()->flash('flash.bannerStyle', 'success');
            return back()->with('status', 'Deleted Successfully');
        }
    }


    /**
     * Save design section page settings
     */
    public function banner(Request $request)
    {
        $request->validate([
            'banner'      => 'nullable|image|mimes:jpg,jpeg,png|max:102400',
        ]);

        DB::transaction(function () use ($request) {
            $banner = Appearance::updateOrCreate(
                [
                    'name' => AppearanceType::CUSTOM_ORDER()
                ],
                [
                    'data' => [],
                ]

            );

            if ($request->file('banner')) {
                $banner->addMedia($request->banner)->toMediaCollection('primary');
            }
        });

        session()->flash('flash.banner', 'Updated successfullly.');
        session()->flash('flash.bannerStyle', 'success');

        return redirect()->route('appearance.custom-orders');
    }
}
