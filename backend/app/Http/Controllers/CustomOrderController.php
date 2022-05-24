<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Inertia\Inertia;
use App\Models\Color;
use App\Models\Product;
use App\Models\CustomOrder;
use Illuminate\Http\Request;
use App\Enums\CompleteStatus;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;

class CustomOrderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        return Inertia::render('CustomOrders/Index', [
            'customOrders' => CustomOrder::orderBy('id', 'desc')
                ->filter($request->all())
                ->whereBetween(DB::raw('date(created_at)'), [Carbon::parse($request->from ?? "00-00-00"), Carbon::parse($request->to ?? null)])
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
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\CustomOrder  $customOrder
     * @return \Illuminate\Http\Response
     */
    public function show(CustomOrder $customOrder)
    {
        return Inertia::render('CustomOrders/Show', [
            'customOrder' => $customOrder->load('tags', 'products', 'colors'),
            'colors'      => Color::orderBy('name')->get()
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\CustomOrder  $customOrder
     * @return \Illuminate\Http\Response
     */
    public function edit(CustomOrder $customOrder)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\CustomOrder  $customOrder
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, CustomOrder $customOrder)
    {
        $this->validate($request, [
            'feedback'           => 'required|string|max:500',
            'productName'        => ['required', 'string', 'max:100', Rule::unique('products', 'name')->ignore($customOrder->productId)],
            'productSku'         => ['required', 'string', 'max:100', Rule::unique('products', 'sku')->ignore($customOrder->productId)],
            'productDescription' => 'required|string|max:500',
            'productPrice'       => 'required|numeric|min:0',
            'colorId'            => 'required|integer',
            'images.*'           => [
                Rule::requiredIf(function () use ($customOrder) {
                    return !$customOrder->productId;
                }),
                'nullable', 'mimes:jpg,jpeg,png', 'max:10240'
            ],
            'thumbnail'          => [
                Rule::requiredIf(function () use ($customOrder) {
                    return !$customOrder->productId;
                }),
                'nullable', 'mimes:jpg,jpeg,png', 'max:5120'
            ],
            'downloadable'       => [
                Rule::requiredIf(function () use ($customOrder) {
                    return !$customOrder->productId;
                }),
                'nullable', 'mimes:zip'
            ]
        ]);

        DB::transaction(function () use ($customOrder, $request) {
            $product = Product::updateOrCreate(
                [
                    'id'         => $customOrder->productId,
                ],
                [
                    'name'        => $request->productName,
                    'categoryId'  => $customOrder->categoryId,
                    'sku'         => $request->productSku,
                    'price'       => $request->productPrice,
                    'description' => $request->productDescription,
                    'colorId'     => $request->colorId,
                ]
            );

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

            // Update custom order
            $customOrder->update(
                [
                    'feedback'  => $request->feedback,
                    'productId' => $product->id,
                    'status'    => CompleteStatus::COMPLETED()
                ]
            );
        });

        session()->flash('flash.banner', 'Update successfullly.');
        session()->flash('flash.bannerStyle', 'success');

        return back();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\CustomOrder  $customOrder
     * @return \Illuminate\Http\Response
     */
    public function destroy(CustomOrder $customOrder)
    {
        //
    }
}