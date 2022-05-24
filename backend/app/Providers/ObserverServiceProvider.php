<?php

namespace App\Providers;

use App\Models\ColorChange;
use App\Models\Contact;
use App\Models\Order;
use App\Models\OrderItem;
use App\Models\CustomOrder;
use App\Models\PreviewDesign;
use App\Models\Product;
use App\Observers\ColorChangeObserver;
use App\Observers\ContactObserver;
use App\Observers\OrderObserver;
use App\Observers\OrderItemObserver;
use App\Observers\CustomOrderObserver;
use App\Observers\PreviewDesignObserver;
use App\Observers\ProductObserver;
use Illuminate\Support\ServiceProvider;

class ObserverServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        Product::observe(ProductObserver::class);
        Order::observe(OrderObserver::class);
        OrderItem::observe(OrderItemObserver::class);
        CustomOrder::observe(CustomOrderObserver::class);
        ColorChange::observe(ColorChangeObserver::class);
        PreviewDesign::observe(PreviewDesignObserver::class);
        Contact::observe(ContactObserver::class);
    }
}