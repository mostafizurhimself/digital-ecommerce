<?php

namespace App\Console\Commands;

use App\Models\OrderItem;
use Illuminate\Console\Command;

class AddMediaToOrder extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'add:media';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Add medias to the order';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $orderItems = OrderItem::all();

        foreach ($orderItems as $item) {
            $mediaItem = $item->product->getMedia('downloadable');
            $mediaItem->copy($item->order, 'downloads');
            $this->info("Order Item {$item->id} media added");
        }
    }
}