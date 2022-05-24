<?php

namespace App\Http\Controllers\Api;

use App\Facades\Response;
use App\Models\CustomOrder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Resources\ApiResource;
use App\Http\Controllers\Controller;
use App\Http\Requests\CustomOrderRequest;

class CustomOrderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        return ApiResource::collection(CustomOrder::where('customer_id', auth()->user()->id)->filter($request->all())->orderBy('id', 'desc')->paginate(10));
    }


    /**
     * Store custom order
     */
    public function store(CustomOrderRequest $request)
    {
        $customOrder =  DB::transaction(function () use ($request) {
            $customOrder = CustomOrder::create(array_merge($request->except('colors', 'tags', 'products', 'vehiclePhotos', 'referenceDesigns', 'token'), [
                'grandTotal'         => $request->depositAmount + $request->vatAmount,
                'customerGrandTotal' => $request->customerAmount + $request->customerVatAmount,
            ]));

            $customOrder->colors()->sync(explode(",", $request->colors));
            $customOrder->tags()->sync(explode(",", $request->tags));
            $customOrder->products()->sync(explode(",", $request->products));

            if ($request->hasFile('vehiclePhotos')) {
                $customOrder->addMedia($request->file('vehiclePhotos'))->toMediaCollection('vehicle_photos');
                // foreach ($request->file('vehiclePhotos') as $file) {
                //     $customOrder->addMedia($file)->toMediaCollection('vehicle_photos');
                // }
            }

            if ($request->hasFile('referenceDesigns')) {
                $customOrder->addMedia($request->file('referenceDesigns'))->toMediaCollection('reference_designs');
                // foreach ($request->file('referenceDesigns') as $file) {
                //     $customOrder->addMedia($file)->toMediaCollection('reference_designs');
                // }
            }

            return $customOrder;
        });

        return new ApiResource($customOrder);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\CustomOrder  $customOrder
     * @return \Illuminate\Http\Response
     */
    public function show(CustomOrder $customOrder)
    {
        if (auth()->user()->id == $customOrder->customerId) {
            return new ApiResource($customOrder->load('colors', 'products', 'tags'));
        } else {
            Response::error('Unauthorized', 401);
        }
    }
}