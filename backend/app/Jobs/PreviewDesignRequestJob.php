<?php

namespace App\Jobs;

use App\Mail\PreviewDesignRequestMail;
use Illuminate\Bus\Queueable;
use Illuminate\Support\Facades\Mail;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Contracts\Queue\ShouldBeUnique;

class PreviewDesignRequestJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    private $design;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($design)
    {
        $this->design = $design;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $email = new PreviewDesignRequestMail($this->design);
        Mail::to($this->design->customer->email)->send($email);
    }
}