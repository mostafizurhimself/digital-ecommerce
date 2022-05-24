<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class PreviewDesignRequestMail extends Mailable
{
    use Queueable, SerializesModels;

    private $design;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($design)
    {
        $this->design = $design;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->markdown('mails.preview-design-request')->with('design', $this->design);
    }
}