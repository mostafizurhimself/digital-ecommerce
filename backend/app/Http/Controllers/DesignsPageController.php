<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Slide;
use App\Models\Slider;
use App\Models\Category;
use App\Models\Appearance;
use Illuminate\Http\Request;
use App\Enums\AppearanceType;
use App\Models\DesignCharacter;
use Illuminate\Support\Facades\DB;

class DesignsPageController extends Controller
{
    /**
     * Get the designs page settings view
     */
    public function index()
    {
        return Inertia::render('Appearance/Designs/Index', [
            'slider' => Slider::where('name', Slider::DESIGNS_PAGE_SLIDER)->first() ?? null,
            'categories' => Category::orderBy('name')->get(),
            'designCharacter' => DesignCharacter::orderBy('id', 'desc')->get(),


        ]);
    }

    /**
     * Add slide to design page slider
     */
    public function add(Request $request)
    {
        $request->validate([
            'title'    => 'required|string|max:100',
            'subtitle' => 'required|string|max:100',
            'btnText'  => 'required|string|max:100',
            'btnLink'  => 'required|url',
            'image'    => 'required|image|max:10240|mimes:jpg,jpeg,png',
        ]);

        DB::transaction(function () use ($request) {
            $slider = Slider::updateOrCreate(
                [
                    'name' => Slider::DESIGNS_PAGE_SLIDER
                ]
            );

            $slide = $slider->slides()->create([
                'title'    => $request->title,
                'subtitle' => $request->subtitle,
                'btnText'  => $request->btnText,
                'btnLink'  => $request->btnLink,
            ]);

            if ($request->hasFile('image')) {
                $slide->addMedia($request->image)->toMediaCollection('primary');
            }
        });

        session()->flash('flash.banner', 'Slide added successfullly.');
        session()->flash('flash.bannerStyle', 'success');

        return redirect()->route('appearance.designs');
    }

    /**
     * Edit Design Page Slide
     */
    public function edit(Request $request, Slide $slide)
    {
        $request->validate([
            'title'    => 'required|string|max:100',
            'subtitle' => 'required|string|max:100',
            'btnText'  => 'required|string|max:100',
            'btnLink'  => 'required|url',
            'image'    => 'nullable|image|max:10240|mimes:jpg,jpeg,png',
        ]);

        DB::transaction(function () use ($slide, $request) {
            $slide->update([
                'title'    => $request->title,
                'subtitle' => $request->subtitle,
                'btnText'  => $request->btnText,
                'btnLink'  => $request->btnLink,
            ]);

            if ($request->hasFile('image')) {
                $slide->addMedia($request->image)->toMediaCollection('primary');
            }
        });

        session()->flash('flash.banner', 'Updated successfullly.');
        session()->flash('flash.bannerStyle', 'success');
        return redirect()->route('appearance.designs');
    }

    /**
     * Delete design page slide
     */
    public function delete(Slide $slide)
    {
        if ($slide->delete()) {
            session()->flash('flash.banner', 'Deleted successfullly.');
            session()->flash('flash.bannerStyle', 'success');
            return back()->with('status', 'Deleted Successfully');
        }
    }
}
