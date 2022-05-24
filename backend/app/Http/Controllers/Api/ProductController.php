<?php

namespace App\Http\Controllers\Api;

use App\Enums\PublishStatus;
use App\Facades\Helper;
use App\Models\Product;
use Illuminate\Http\Request;
use App\Http\Resources\ApiResource;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Cookie;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        return ApiResource::collection(Product::filter($request->all())->where('status', PublishStatus::PUBLISHED())->sorted()->paginate(10));
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, Product $product)
    {
        $relatedProducts = Product::whereHas('tags', function ($tag) use ($product) {
            $tag->whereIn('id', $product->tags()->pluck('id')->toArray());
        })
            ->orWhere('category_id', $product->categoryId)
            ->orWhere('color_id', $product->colorId)
            ->limit(10)
            ->get();

        $data = [
            'product'         => $product->load('tags'),
            'relatedProducts' => $relatedProducts,
        ];

        if ($request->newView === 'true') {
            $product->increment('total_view');
        }

        return new ApiResource($data);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function showForAuth(Request $request, Product $product)
    {
        $relatedProducts = Product::whereHas('tags', function ($tag) use ($product) {
            $tag->whereIn('id', $product->tags()->pluck('id')->toArray());
        })
            ->orWhere('category_id', $product->categoryId)
            ->orWhere('color_id', $product->colorId)
            ->limit(12)
            ->get();

        $data = [
            'product'         => $product->load('tags'),
            'relatedProducts' => $relatedProducts,
        ];

        // Cookies
        if ($request->newView === 'true') {
            $product->increment('total_view');
        }

        return new ApiResource($data);
    }
}
