<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Color;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\DB;

class ColorController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        return Inertia::render('Colors/Index', [
            'colors' => Color::orderBy('id', 'desc')
                ->filter($request->all())
                ->paginate()
                ->withQueryString(),
            'query'  => $request->all(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Colors/Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'name'       => 'required|string|max:100|unique:colors',
            'code'       => 'nullable|string|max:100',
            'isGradient' => 'required',
            'image'      => 'nullable|image|mimes:jpg,jpeg,png|max:1000',
        ]);


        DB::transaction(function () use ($request) {
            $color = Color::create(
                [
                    'name'       => $request->name,
                    'code'       => $request->code,
                    'isGradient' => $request->isGradient,
                ]
            );

            if ($request->file('image')) {
                $color->addMedia($request->image)->toMediaCollection('primary');
            }
        });

        return redirect()->route('colors.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Color  $color
     * @return \Illuminate\Http\Response
     */
    public function show(Color $color)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Color  $color
     * @return \Illuminate\Http\Response
     */
    public function edit(Color $color)
    {
        return Inertia::render('Colors/Edit', [
            'color' => $color
        ]);
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Color  $color
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Color $color)
    {
        $request->validate([
            'name'       => "required|string|max:100|unique:colors,name,{$color->id}",
            'code'       => 'nullable|string|max:100',
            'isGradient' => 'required',
            'image'      => 'nullable|image|mimes:jpg,jpeg,png|max:1000',
        ]);

        DB::transaction(function () use ($request, $color) {
            $color->update(
                [
                    'name' => $request->name,
                    'code' => $request->code,
                    'isGradient' => $request->isGradient,
                ]
            );

            if ($request->file('image')) {
                $color->addMedia($request->image)->toMediaCollection('primary');
            }
        });


        return $request->wantsJson()
            ? new JsonResponse('', 200)
            : back()->with('status', 'Updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Color  $color
     * @return \Illuminate\Http\Response
     */
    public function destroy(Color $color)
    {
        if ($color->products()->exists()) {
            $products = $color->products()->count();
            session()->flash('flash.banner', "There are {$products} products related to it. You can not delete it now.");
            session()->flash('flash.bannerStyle', 'danger');
        } else {
            if ($color->delete()) {
                session()->flash('flash.banner', 'Deleted successfullly.');
                session()->flash('flash.bannerStyle', 'success');
            }
        }
        return back();
    }
}