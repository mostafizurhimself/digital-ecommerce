<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Support\Facades\Mail;
use App\Mail\ColorChangeFeedbackMail;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Contracts\Queue\ShouldBeUnique;

class ColorChangeFeedbackJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    private $colorChange;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($colorChange)
    {
        $this->colorChange = $colorChange;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $email = (new ColorChangeFeedbackMail($this->colorChange));
        Mail::to($this->colorChange->customer->email)->send($email);
    }
}