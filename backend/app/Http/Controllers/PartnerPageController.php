<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Appearance;
use Illuminate\Http\Request;
use App\Enums\AppearanceType;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;

class PartnerPageController extends Controller
{
    /**
     * Get the Partner page settings view
     */
    public function index()
    {
        return Inertia::render('Appearance/Partner/Index', [
            'partner' => Appearance::where('name', AppearanceType::PARTNER_PAGE())->first() ?? null,
        ]);
    }

    /**
     * Save partner page content
     */
    public function store(Request $request)
    {
        $request->validate([
            'title'    => 'required|string|max:100',
            'content'  => 'required|string',
            'image'    => 'nullable|image|mimes:png,jpg,jpeg|max:10240'
        ]);

        DB::transaction(function () use ($request) {
            $partner = Appearance::updateOrCreate(
                [
                    'name' => AppearanceType::PARTNER_PAGE()
                ],
                [
                    'data' => [
                        'title'    => $request->title,
                        'content'  => $request->content,
                    ]
                ]
            );

            if ($request->file('image')) {
                $partner->addMedia($request->image)->toMediaCollection('primary');
            }
        });

        session()->flash('flash.banner', 'Updated successfullly.');
        session()->flash('flash.bannerStyle', 'success');

        return redirect()->route('appearance.partner');
    }
}
