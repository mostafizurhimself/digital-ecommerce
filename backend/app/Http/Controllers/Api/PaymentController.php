<?php

namespace App\Http\Controllers\Api;

use Carbon\Carbon;
use Stripe\Charge;
use Stripe\Stripe;
use App\Models\Order;
use App\Models\ColorChange;
use App\Models\CustomOrder;
use Illuminate\Http\Request;
use App\Models\PreviewDesign;
use Illuminate\Support\Facades\DB;
use App\Http\Requests\OrderRequest;
use App\Http\Resources\ApiResource;
use App\Http\Controllers\Controller;
use App\Http\Requests\ColorChangeRequest;
use App\Http\Requests\CustomOrderRequest;
use App\Http\Requests\PreviewDesignRequest;

class PaymentController extends Controller
{
    /**
     * Make a stripe payment
     *
     * @param \Illuminate\Http\OrderRequest $request
     * @return \Illuminate\Http\Response
     */
    public function order(OrderRequest $request)
    {
        $order = DB::transaction(function () use ($request) {
            $order = $this->createOrder($request);
            $this->charge($order->customerGrandTotal, $order->customerCurrency, $request->token, "Order({$order->id}) from Digital Ecommerce");
            return $order;
        });


        return new ApiResource($order);
    }

    /**
     * Make a stripe payment
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function customOrder(CustomOrderRequest $request)
    {
        $customOrder = DB::transaction(function () use ($request) {
            $customOrder = $this->createCustomOrder($request);
            $this->charge($customOrder->customerGrandTotal, $customOrder->customerCurrency, $request->token, "Custom order({$customOrder->id}) from Digital Ecommerce");
            return $customOrder;
        });


        return new ApiResource($customOrder);
    }

    /**
     * Make a stripe payment
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function colorChange(ColorChangeRequest $request)
    {
        $colorChange = DB::transaction(function () use ($request) {
            $colorChange = $this->createColorChange($request);
            $this->charge($colorChange->customerGrandTotal, $colorChange->customerCurrency, $request->token, "Color Change Request ({$colorChange->id}) from Digital Ecommerce");
            return $colorChange;
        });


        return new ApiResource($colorChange);
    }


    /**
     * Make a stripe payment
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function previewDesign(PreviewDesignRequest $request)
    {

        $previewDesign = DB::transaction(function () use ($request) {
            $previewDesign = $this->createPreviewDesign($request);
            $this->charge($previewDesign->customerGrandTotal, $previewDesign->customerCurrency, $request->token, "Preview Design Request ({$previewDesign->id}) from Digital Ecommerce");
            return $previewDesign;
        });


        return new ApiResource($previewDesign);
    }

    /**
     * Create payment to stripe
     */
    public function charge($amount, $currency, $token, $description)
    {
        Stripe::setApiKey(env('STRIPE_SECRET'));
        Charge::create([
            "amount"   => $amount * 100,
            "currency" => $currency,
            "source"   => $token,
            "description" => $description
        ]);
    }

    /**
     * Create order after payment complete
     */
    public function createOrder($request)
    {
        $order = Order::create([
            'date'                  => Carbon::now(),
            'customerId'            => $request->customerId,
            'couponId'              => $request->couponId,
            'customerCurrency'      => $request->customerCurrency,
            'totalAmount'           => $request->totalAmount,
            'customerAmount'        => $request->customerAmount,
            'vat'                   => $request->vat,
            'vatType'               => $request->vatType,
            'vatAmount'             => $request->vatAmount,
            'customerVatAmount'     => $request->customerVatAmount,
            'totalDiscount'         => $request->totalDiscount,
            'customerTotalDiscount' => $request->customerTotalDiscount,
            'grandTotal'            => ($request->totalAmount + $request->vatAmount) - $request->totalDiscount,
            'customerGrandTotal'    => ($request->customerAmount + $request->customerVatAmount) - $request->customerTotalDiscount,
            'note'                  => $request->note,
        ]);

        foreach ($request->orderItems as $item) {
            $order->orderItems()->create(
                [
                    'productId'        => $item['productId'],
                    'amount'           => $item['amount'],
                    'customerAmount'   => $item['customerAmount'],
                    'colorChangeId'    => $item['colorChangeId'] ?? null,
                ]
            );
        }

        return $order;
    }

    /**
     * Create customer order after payment complete
     */
    public function createCustomOrder($request)
    {
        $customOrder = CustomOrder::create(array_merge($request->except('colors', 'tags', 'products', 'vehiclePhotos', 'referenceDesigns', 'token'), [
            'grandTotal'         => $request->depositAmount + $request->vatAmount,
            'customerGrandTotal' => $request->customerAmount + $request->customerVatAmount,
        ]));

        $customOrder->colors()->sync(explode(",", $request->colors));
        $customOrder->tags()->sync(explode(",", $request->tags));
        $customOrder->products()->sync(explode(",", $request->products));

        if ($request->hasFile('vehiclePhotos')) {
            $customOrder->addMedia($request->file('vehiclePhotos'))->toMediaCollection('vehicle_photos');
        }

        if ($request->hasFile('referenceDesigns')) {
            $customOrder->addMedia($request->file('referenceDesigns'))->toMediaCollection('reference_designs');
        }

        return $customOrder;
    }

    /**
     * Create color change after payment complete
     */
    public function createColorChange($request)
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

        return $colorChange;
    }

    /**
     * Create preview design after payment complete
     */
    public function createPreviewDesign($request)
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
        return $previewDesign;
    }
}
