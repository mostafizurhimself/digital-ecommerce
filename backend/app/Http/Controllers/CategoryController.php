<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\DB;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        return Inertia::render('Categories/Index', [
            'categories' => Category::orderBy('id', 'desc')
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
        return Inertia::render('Categories/Create');
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
            'name'        => 'required|string|max:100|unique:categories',
            'description' => 'nullable|string|max:500',
            'image'       => 'required|image|mimes:jpg,jpeg,png|max:10240',
            'tutorials.*'   => 'nullable|mimes:pdf|max:30720'
        ]);

        DB::transaction(function () use ($request) {
            $category = Category::create($request->except('image', 'tutorials'));

            if ($request->hasFile('image')) {
                $category->addMedia($request->image)->toMediaCollection('primary');
            }

            if ($request->hasFile('tutorials')) {
                foreach ($request->file('tutorials') as $file) {
                    $category->addMedia($file)->toMediaCollection('collection');
                }
            }
        });

        session()->flash('flash.banner', 'Created successfullly.');
        session()->flash('flash.bannerStyle', 'success');

        return redirect()->route('categories.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function show(Category $category)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function edit(Category $category)
    {
        return Inertia::render('Categories/Edit', [
            'category' => $category
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Category $category)
    {
        $request->validate([
            'name' => "required|string|max:100|unique:categories,name,{$category->id}",
            'description' => 'nullable|string|max:500',
            'image'       => 'nullable|image|mimes:jpg,jpeg,png|max:10240',
            'tutorials.*'   => 'nullable|mimes:pdf|max:30720'
        ]);

        $category->update($request->except('image', 'tutorials'));

        if ($request->hasFile('image')) {
            $category->addMedia($request->image)->toMediaCollection('primary');
        }

        if ($request->hasFile('tutorials')) {
            foreach ($request->file('tutorials') as $file) {
                $category->addMedia($file)->toMediaCollection('collection');
            }
        }

        return $request->wantsJson()
            ? new JsonResponse('', 200)
            : back()->with('status', 'Updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function destroy(Category $category)
    {
        if ($category->products()->exists()) {
            $products = $category->products()->count();
            session()->flash('flash.banner', "There are {$products} products related to it. You can not delete it now.");
            session()->flash('flash.bannerStyle', 'danger');
        } else {
            if ($category->delete()) {
                session()->flash('flash.banner', 'Deleted successfullly.');
                session()->flash('flash.bannerStyle', 'success');
            }
        }
        return back();
    }
}