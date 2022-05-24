<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Enums\CompleteStatus;
use App\Models\PreviewDesign;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;

class PreviewDesignController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        return Inertia::render('PreviewDesigns/Index', [
            'previewDesigns' => PreviewDesign::filter($request->all())
                ->whereBetween(DB::raw('date(created_at)'), [Carbon::parse($request->from ?? "00-00-00"), Carbon::parse($request->to ?? null)])
                ->orderBy('id', 'desc')
                ->paginate()
                ->withQueryString(),
            'query'  => $request->all(),
            'statusOptions' => CompleteStatus::toSelectOptions(),
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\PreviewDesign  $previewDesign
     * @return \Illuminate\Http\Response
     */
    public function show(PreviewDesign $previewDesign)
    {
        return Inertia::render('PreviewDesigns/Show', [
            'previewDesign' => $previewDesign,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\PreviewDesign  $previewDesign
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, PreviewDesign $previewDesign)
    {
        $this->validate($request, [
            'feedback'     => 'required|string|max:500',
            'images'       => 'nullable',
            'images.*'     => 'nullable|image|mimes:jpg,jpeg,png|max:10240',
            'thumbnail'    => 'nullable|image|mimes:jpg,jpeg,png|max:5120',
            'downloadable' => 'nullable|mimes:zip'
        ]);

        DB::transaction(function () use ($previewDesign, $request) {
            $previewDesign->update(
                [
                    'feedback' => $request->feedback,
                    'status'   => CompleteStatus::COMPLETED()
                ]
            );

            if ($request->hasFile('images')) {
                foreach ($request->file('images') as $file) {
                    $previewDesign->addMedia($file)->toMediaCollection('collection');
                }
            }

            if ($request->hasFile('downloadable')) {
                $previewDesign->addMedia($request->downloadable)->toMediaCollection('downloadable');
            }

            if ($request->hasFile('thumbnail')) {
                $previewDesign->addMedia($request->thumbnail)->toMediaCollection('thumbnail');
            }
        });

        session()->flash('flash.banner', 'Update successfullly.');
        session()->flash('flash.bannerStyle', 'success');

        return $request->wantsJson()
            ? new JsonResponse('', 200)
            : back()->with('status', 'Updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\PreviewDesign  $previewDesign
     * @return \Illuminate\Http\Response
     */
    public function destroy(PreviewDesign $previewDesign)
    {
        //
    }
}
