<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ColorChangeRequestMail extends Mailable
{
    use Queueable, SerializesModels;

    private $colorChange;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($colorChange)
    {
        $this->colorChange = $colorChange;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->markdown('mails.color-change-request')
            ->with('colorChange', $this->colorChange);
    }
}