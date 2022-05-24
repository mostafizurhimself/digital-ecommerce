<?php

namespace App\Observers;

use App\Jobs\NotifyUserJob;
use App\Models\ColorChange;
use App\Jobs\ColorChangeRequestJob;
use App\Jobs\ColorChangeFeedbackJob;
use App\Notifications\ColorChangeRequested;

class ColorChangeObserver
{
    /**
     * Handle the ColorChange "created" event.
     *
     * @param  \App\Models\ColorChange  $colorChange
     * @return void
     */
    public function created(ColorChange $colorChange)
    {
        ColorChangeRequestJob::dispatch($colorChange);
        // Send notification to admin user
        NotifyUserJob::dispatch($colorChange);
    }

    /**
     * Handle the ColorChange "updated" event.
     *
     * @param  \App\Models\ColorChange  $colorChange
     * @return void
     */
    public function updated(ColorChange $colorChange)
    {
        if ($colorChange->isDirty('feedback')) {
            ColorChangeFeedbackJob::dispatch($colorChange);
        }
    }

    /**
     * Handle the ColorChange "deleted" event.
     *
     * @param  \App\Models\ColorChange  $colorChange
     * @return void
     */
    public function deleted(ColorChange $colorChange)
    {
        //
    }

    /**
     * Handle the ColorChange "restored" event.
     *
     * @param  \App\Models\ColorChange  $colorChange
     * @return void
     */
    public function restored(ColorChange $colorChange)
    {
        //
    }

    /**
     * Handle the ColorChange "force deleted" event.
     *
     * @param  \App\Models\ColorChange  $colorChange
     * @return void
     */
    public function forceDeleted(ColorChange $colorChange)
    {
        //
    }
}