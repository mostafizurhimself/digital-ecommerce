<?php

namespace App\Jobs;

use App\Models\ColorChange;
use App\Models\Contact;
use App\Models\CustomOrder;
use App\Models\User;
use App\Models\Order;
use App\Models\PreviewDesign;
use App\Notifications\NewColorChangeRequested;
use App\Notifications\NewCustomOrderPlaced;
use App\Notifications\NewMessage;
use Illuminate\Bus\Queueable;
use App\Notifications\NewOrderPlaced;
use App\Notifications\NewPreviewDesignRequested;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Support\Facades\Notification;
use Illuminate\Contracts\Queue\ShouldBeUnique;

class NotifyUserJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Set the model of the notification
     */
    private $model;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($model)
    {
        $this->model = $model;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $users = User::all();

        if ($this->model instanceof Order) {
            Notification::send($users, new NewOrderPlaced($this->model));
        }

        if ($this->model instanceof CustomOrder) {
            Notification::send($users, new NewCustomOrderPlaced($this->model));
        }

        if ($this->model instanceof ColorChange) {
            Notification::send($users, new NewColorChangeRequested($this->model));
        }

        if ($this->model instanceof PreviewDesign) {
            Notification::send($users, new NewPreviewDesignRequested($this->model));
        }

        if ($this->model instanceof Contact) {
            Notification::send($users, new NewMessage($this->model));
        }
    }
}