<?php

namespace App\Http\Controllers;

use App\Models\Feature;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\DB;

class FeatureController extends Controller
{

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'title'       => 'required|string|max:100',
            'subtitle'    => 'required|string|max:100',
            'icon'        => 'nullable|image|mimes:jpg,jpeg,png|max:1000',
        ]);

        DB::transaction(function () use ($request) {
            $feature = Feature::create(
                [
                    'title'       => $request->title,
                    'subtitle'    => $request->subtitle,
                ]
            );

            if ($request->file('icon')) {
                $feature->addMedia($request->icon)->toMediaCollection('primary');
            }
        });

        return redirect()->route('appearance.home');
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Feature $feature)
    {
        $request->validate([
            'title'       => 'required|string|max:100',
            'subtitle'    => 'required|string|max:100',
            'icon'        => 'nullable|image|mimes:jpg,jpeg,png|max:1000',
        ]);

        DB::transaction(function () use ($request, $feature) {
            $feature->update(
                [
                    'title'       => $request->title,
                    'subtitle'    => $request->subtitle,
                ]
            );

            if ($request->file('icon')) {
                $feature->addMedia($request->icon)->toMediaCollection('primary');
            }
        });

        return $request->wantsJson()
            ? new JsonResponse('', 200)
            : back()->with('status', 'Feature updated');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Feature $feature)
    {
        if ($feature->delete()) {
            return back()->with('status', 'Feature deleted');
        }
    }
}
