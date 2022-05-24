<?php

namespace App\Http\Controllers\Api;

use Carbon\Carbon;
use App\Facades\Response;
use App\Models\ColorChange;
use Illuminate\Http\Request;
use App\Http\Resources\ApiResource;
use App\Http\Controllers\Controller;
use App\Http\Requests\ColorChangeRequest;

class ColorChangeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        return ApiResource::collection(ColorChange::where('customer_id', auth()->user()->id)->filter($request->all())->orderBy('id', 'desc')->paginate(10));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\ColorChangeRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ColorChangeRequest $request)
    {
        $colorChange = ColorChange::create([
            'date'              => Carbon::now(),
            'customerId'        => auth()->user()->id,
            'productId'         => $request->productId,
            'colors'            => $request->colors,
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

        return new ApiResource($colorChange);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\ColorChange  $colorChange
     * @return \Illuminate\Http\Response
     */
    public function show(ColorChange $colorChange)
    {
        if (auth()->user()->id == $colorChange->customerId) {
            return new ApiResource($colorChange);
        } else {
            Response::error('Unauthorized', 401);
        }
    }
}