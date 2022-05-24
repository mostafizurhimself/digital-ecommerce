<?php

namespace App\Observers;

use App\Jobs\NotifyUserJob;
use App\Models\CustomOrder;
use App\Jobs\CustomOrderCompletedJob;
use App\Notifications\CustomOrderCompleted;

class CustomOrderObserver
{
    /**
     * Handle the CustomOrder "created" event.
     *
     * @param  \App\Models\CustomOrder  $customOrder
     * @return void
     */
    public function created(CustomOrder $customOrder)
    {
        // Send notification to customer
        CustomOrderCompletedJob::dispatch($customOrder);
        // Send notification to admin user
        NotifyUserJob::dispatch($customOrder);
    }

    /**
     * Handle the CustomOrder "updated" event.
     *
     * @param  \App\Models\CustomOrder  $customOrder
     * @return void
     */
    public function updated(CustomOrder $customOrder)
    {
        //
    }

    /**
     * Handle the CustomOrder "deleted" event.
     *
     * @param  \App\Models\CustomOrder  $customOrder
     * @return void
     */
    public function deleted(CustomOrder $customOrder)
    {
        //
    }

    /**
     * Handle the CustomOrder "restored" event.
     *
     * @param  \App\Models\CustomOrder  $customOrder
     * @return void
     */
    public function restored(CustomOrder $customOrder)
    {
        //
    }

    /**
     * Handle the CustomOrder "force deleted" event.
     *
     * @param  \App\Models\CustomOrder  $customOrder
     * @return void
     */
    public function forceDeleted(CustomOrder $customOrder)
    {
        //
    }
}