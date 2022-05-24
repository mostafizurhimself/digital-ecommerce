<?php

namespace App\Observers;

use App\Jobs\NotifyUserJob;
use App\Models\PreviewDesign;
use App\Jobs\PreviewDesignRequestJob;
use App\Jobs\PreviewDesignFeedbackJob;

class PreviewDesignObserver
{
    /**
     * Handle the PreviewDesign "created" event.
     *
     * @param  \App\Models\PreviewDesign  $previewDesign
     * @return void
     */
    public function created(PreviewDesign $previewDesign)
    {
        PreviewDesignRequestJob::dispatch($previewDesign);
        // Send notification to admin user
        NotifyUserJob::dispatch($previewDesign);
    }

    /**
     * Handle the PreviewDesign "updated" event.
     *
     * @param  \App\Models\PreviewDesign  $previewDesign
     * @return void
     */
    public function updated(PreviewDesign $previewDesign)
    {
        if ($previewDesign->isDirty('feedback')) {
            PreviewDesignFeedbackJob::dispatch($previewDesign);
        }
    }

    /**
     * Handle the PreviewDesign "deleted" event.
     *
     * @param  \App\Models\PreviewDesign  $previewDesign
     * @return void
     */
    public function deleted(PreviewDesign $previewDesign)
    {
        //
    }

    /**
     * Handle the PreviewDesign "restored" event.
     *
     * @param  \App\Models\PreviewDesign  $previewDesign
     * @return void
     */
    public function restored(PreviewDesign $previewDesign)
    {
        //
    }

    /**
     * Handle the PreviewDesign "force deleted" event.
     *
     * @param  \App\Models\PreviewDesign  $previewDesign
     * @return void
     */
    public function forceDeleted(PreviewDesign $previewDesign)
    {
        //
    }
}