<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Inertia\Inertia;
use App\Models\ColorChange;
use Illuminate\Http\Request;
use App\Enums\CompleteStatus;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;

class ColorChangeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        return Inertia::render('ColorChanges/Index', [
            'colorChanges' => ColorChange::filter($request->all())
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
     * @param  \App\Models\ColorChange  $colorChange
     * @return \Illuminate\Http\Response
     */
    public function show(ColorChange $colorChange)
    {
        return Inertia::render('ColorChanges/Show', [
            'colorChange' => $colorChange,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\ColorChange  $colorChange
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, ColorChange $colorChange)
    {
        $this->validate($request, [
            'feedback'           => 'required|string|max:500',
            'productName'        => 'required|string|max:100|unique:products,name',
            'productSku'         => 'required|string|max:100|unique:products,sku',
            'productDescription' => 'required|string|max:500',
            'images'             => 'required',
            'images.*'           => 'required|image|mimes:jpg,jpeg,png|max:10240',
            'thumbnail'          => 'required|image|mimes:jpg,jpeg,png|max:5120',
            'downloadable'       => 'required|mimes:zip'
        ]);

        DB::transaction(function () use ($colorChange, $request) {
            $colorChange->update(
                [
                    'feedback'           => $request->feedback,
                    'productName'        => $request->productName,
                    'productSku'         => $request->productSku,
                    'productDescription' => $request->productDescription,
                    'status'             => CompleteStatus::COMPLETED()
                ]
            );

            if ($request->hasFile('images')) {
                foreach ($request->file('images') as $file) {
                    $colorChange->addMedia($file)->toMediaCollection('collection');
                }
            }

            if ($request->hasFile('downloadable')) {
                $colorChange->addMedia($request->downloadable)->toMediaCollection('downloadable');
            }

            if ($request->hasFile('thumbnail')) {
                $colorChange->addMedia($request->thumbnail)->toMediaCollection('thumbnail');
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
     * @param  \App\Models\ColorChange  $colorChange
     * @return \Illuminate\Http\Response
     */
    public function destroy(ColorChange $colorChange)
    {
        //
    }
}