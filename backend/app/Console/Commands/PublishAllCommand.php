<?php

namespace App\Console\Commands;

use App\Enums\PublishStatus;
use App\Models\Product;
use Illuminate\Console\Command;

class PublishAllCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'product:publish';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'All product will be published';

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
     * Execute the console command for product publish
     *
     * @return int
     */
    public function handle()
    {
        $products = Product::all();

        foreach($products as $product){
            $product->update(['status' => PublishStatus::PUBLISHED()]);
            $this->info("$product->id published");
        }
    }
}
