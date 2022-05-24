<?php

namespace App\Observers;

use App\Models\OrderItem;
use AmrShawky\LaravelCurrency\Facade\Currency;

class OrderItemObserver
{
    /**
     * Handle the OrderItem "saved" event.
     *
     * @param  \App\Models\OrderItem  $orderItem
     * @return void
     */
    public function saving(OrderItem $orderItem)
    {
        //
    }


    /**
     * Handle the OrderItem "saved" event.
     *
     * @param  \App\Models\OrderItem  $orderItem
     * @return void
     */
    public function saved(OrderItem $orderItem)
    {
        // if ($orderItem->colorChangeId) {
        //     $mediaItem = $orderItem->colorChange->getMedia('downloadable')->first();
        // } else {
        //     $mediaItem = $orderItem->product->getMedia('downloadable')->first();
        // }
        // $mediaItem->copy($orderItem->order, 'download');
    }

    /**
     * Handle the OrderItem "updated" event.
     *
     * @param  \App\Models\OrderItem  $orderItem
     * @return void
     */
    public function updated(OrderItem $orderItem)
    {
        $orderItem->order->updateTotalAmount();
        $orderItem->order->updateCustomerAmount();
        $orderItem->order->updateVatAmount();
        $orderItem->order->updateCustomerVatAmount();
        $orderItem->order->updateGrandTotal();
        $orderItem->order->updateCustomerGrandTotal();
    }

    /**
     * Handle the OrderItem "deleted" event.
     *
     * @param  \App\Models\OrderItem  $orderItem
     * @return void
     */
    public function deleted(OrderItem $orderItem)
    {
        $orderItem->order->updateTotalAmount();
        $orderItem->order->updateCustomerAmount();
        $orderItem->order->updateVatAmount();
        $orderItem->order->updateCustomerVatAmount();
        $orderItem->order->updateGrandTotal();
        $orderItem->order->updateCustomerGrandTotal();
    }

    /**
     * Handle the OrderItem "restored" event.
     *
     * @param  \App\Models\OrderItem  $orderItem
     * @return void
     */
    public function restored(OrderItem $orderItem)
    {
        $orderItem->order->updateTotalAmount();
        $orderItem->order->updateCustomerAmount();
        $orderItem->order->updateVatAmount();
        $orderItem->order->updateCustomerVatAmount();
        $orderItem->order->updateGrandTotal();
        $orderItem->order->updateCustomerGrandTotal();
    }

    /**
     * Handle the OrderItem "force deleted" event.
     *
     * @param  \App\Models\OrderItem  $orderItem
     * @return void
     */
    public function forceDeleted(OrderItem $orderItem)
    {
        $orderItem->order->updateTotalAmount();
        $orderItem->order->updateCustomerAmount();
        $orderItem->order->updateVatAmount();
        $orderItem->order->updateCustomerVatAmount();
        $orderItem->order->updateGrandTotal();
        $orderItem->order->updateCustomerGrandTotal();
    }
}