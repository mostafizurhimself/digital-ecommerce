<?php

namespace App\Http\Controllers;

use App\Enums\PublishStatus;
use App\Models\Tag;
use Inertia\Inertia;
use App\Models\Color;
use App\Models\Product;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        return Inertia::render('Products/Index', [
            'products' => Product::orderBy('id', 'desc')
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
        return Inertia::render('Products/Create', [
            'categories' => Category::orderBy('name')->get(),
            'colors' => Color::orderBy('name')->get(),
            'tags' => Tag::orderBy('name')->get(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // dd($request->all());
        $request->validate([
            'name' => 'required|string|max:100|unique:products',
            'categoryId' => 'required',
            'colorId' => 'required',
            'sku' => 'required|string|max:30|unique:products',
            'price' => 'required|numeric|min:00',
            'description' => 'nullable|string|max:500',
            'note' => 'nullable|string|max:400',
            'printDataFormat' => 'nullable|string|max:400',
            'recommendedMaterial' => 'nullable|string|max:400',
            'images'   => 'required',
            'images.*' => 'required|image|mimes:jpg,jpeg,png|max:10240',
            'thumbnail'   => 'required|image|mimes:jpg,jpeg,png|max:5120',
            'tags.*'   => 'required|integer',
            'downloadable' => 'required|mimes:zip'
        ]);

        DB::transaction(function () use ($request) {
            $product = Product::create($request->except('images', 'tags', 'downloadable', 'thumbnail'));

            if ($request->hasFile('images')) {
                foreach ($request->file('images') as $file) {
                    $product->addMedia($file)->toMediaCollection('collection');
                }
            }

            if ($request->hasFile('downloadable')) {
                $product->addMedia($request->downloadable)->toMediaCollection('downloadable');
            }

            if ($request->hasFile('thumbnail')) {
                $product->addMedia($request->thumbnail)->toMediaCollection('thumbnail');
            }


            $product->tags()->sync($request->tags);
        });

        session()->flash('flash.banner', 'Created successfullly.');
        session()->flash('flash.bannerStyle', 'success');

        return redirect()->route('products.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function show(Product $product)
    {
        return Inertia::render('Products/Show', [
            'product' => $product->load('tags'),
            'categories' => Category::orderBy('name')->get(),
            'colors' => Color::orderBy('name')->get(),
            'tags' => Tag::orderBy('name')->get(),

        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function edit(Product $product)
    {
        return Inertia::render('Products/Edit', [
            'product' => $product->load('tags'),
            'categories' => Category::orderBy('name')->get(),
            'colors' => Color::orderBy('name')->get(),
            'tags' => Tag::orderBy('name')->get(),
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Product $product)
    {
        // dd($request->all());
        $request->validate([
            'name' => ['required', 'string', 'max:100', Rule::unique('products', 'name')->ignore($product->id)],
            'categoryId' => 'required',
            'colorId' => 'required',
            'sku' => ['required', 'string', 'max:30', Rule::unique('products', 'sku')->ignore($product->id)],
            'price' => 'required|numeric|min:00',
            'description' => 'nullable|string|max:500',
            'note' => 'nullable|string|max:400',
            'printDataFormat' => 'nullable|string|max:400',
            'recommendedMaterial' => 'nullable|string|max:400',
            'images.*' => 'nullable|image|mimes:jpg,jpeg,png|max:10240',
            'thumbnail'   => 'nullable|image|mimes:jpg,jpeg,png|max:5120',
            'tags.*'   => 'required|integer',
            'downloadable' => 'nullable|mimes:zip'
        ]);


        DB::transaction(function () use ($product, $request) {
            $product->update($request->except('images', 'tags', 'downloadable', 'thumbnail'));

            if ($request->hasFile('images')) {
                foreach ($request->file('images') as $file) {
                    $product->addMedia($file)->toMediaCollection('collection');
                }
            }

            if ($request->hasFile('downloadable')) {
                $product->addMedia($request->downloadable)->toMediaCollection('downloadable');
            }

            if ($request->hasFile('thumbnail')) {
                $product->addMedia($request->thumbnail)->toMediaCollection('thumbnail');
            }

            $product->tags()->sync($request->tags);
        });


        return $request->wantsJson()
            ? new JsonResponse('', 200)
            : back()->with('status', 'Updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroy(Product $product)
    {
        if ($product->orderItems()->exists()) {
            $orderItems = $product->orderItems()->count();
            session()->flash('flash.banner', "There are {$orderItems} order items related to it. You can not delete it now.");
            session()->flash('flash.bannerStyle', 'danger');
            return;
        }

        if ($product->customOrders()->exists()) {
            $customOrders = $product->customOrders()->count();
            session()->flash('flash.banner', "There are {$customOrders} custom orders related to it. You can not delete it now.");
            session()->flash('flash.bannerStyle', 'danger');
            return;
        }

        if ($product->colorChanges()->exists()) {
            $colorChanges = $product->colorChanges()->count();
            session()->flash('flash.banner', "There are {$colorChanges} color change request related to it. You can not delete it now.");
            session()->flash('flash.bannerStyle', 'danger');
            return;
        }

        if ($product->previewDesigns()->exists()) {
            $previewDesigns = $product->previewDesigns()->count();
            session()->flash('flash.banner', "There are {$previewDesigns} preview designs request related to it. You can not delete it now.");
            session()->flash('flash.bannerStyle', 'danger');
            return;
        }

        if ($product->delete()) {
            session()->flash('flash.banner', 'Deleted successfullly.');
            session()->flash('flash.bannerStyle', 'success');

            return back()->with('status', 'Deleted successfully.');
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\JsonResponse
     */
    public function published(Product $product)
    {

        if ($product->status == PublishStatus::UNPUBLISHED()) {
            $product->update(['status' => PublishStatus::PUBLISHED()]);
            session()->flash('flash.banner', 'Product published successful.');
            session()->flash('flash.bannerStyle', 'success');
        } else {
            session()->flash('flash.banner', 'Product Unpublished successful.');
            session()->flash('flash.bannerStyle', 'success');
            $product->update(['status' => PublishStatus::UNPUBLISHED()]);
        }
        return back();
    }
}