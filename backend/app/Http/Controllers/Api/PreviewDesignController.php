<?php

namespace App\Http\Controllers\Api;

use Carbon\Carbon;
use App\Facades\Response;
use Illuminate\Http\Request;
use App\Models\PreviewDesign;
use App\Http\Resources\ApiResource;
use App\Http\Controllers\Controller;
use App\Http\Requests\PreviewDesignRequest;

class PreviewDesignController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        return ApiResource::collection(PreviewDesign::where('customer_id', auth()->user()->id)->filter($request->all())->orderBy('id', 'desc')->paginate(10));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\PreviewDesignRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(PreviewDesignRequest $request)
    {
        $previewDesign = PreviewDesign::create([
            'date'              => Carbon::now(),
            'customerId'        => auth()->user()->id,
            'productId'         => $request->productId,
            'vehicleId'         => $request->vehicleId,
            'vehicleModelId'    => $request->vehicleModelId,
            'description'       => $request->description,
            'depositAmount'     => $request->depositAmount,
            'customerAmount'    => $request->customerAmount,
            'customerCurrency'  => $request->customerCurrency,
            'vat'               => $request->vat,
            'vatType'           => $request->vatType,
            'vatAmount'         => $request->vatAmount,
            'customerVatAmount' => $request->customerVatAmount,
            'grandTotal'        => $request->depositAmount + $request->vatAmount,
            'customerGrandTotal' => $request->customerAmount + $request->customerVatAmount,
        ]);

        return new ApiResource($previewDesign);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\PreviewDesign  $previewDesign
     * @return \Illuminate\Http\Response
     */
    public function show(PreviewDesign $previewDesign)
    {
        if (auth()->user()->id == $previewDesign->customerId) {
            return new ApiResource($previewDesign);
        } else {
            Response::error('Unauthorized', 401);
        }
    }
}