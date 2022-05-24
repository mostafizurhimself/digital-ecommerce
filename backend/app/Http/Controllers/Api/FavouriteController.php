<?php

namespace App\Http\Controllers\Api;

use App\Models\Product;
use App\Models\Customer;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class FavouriteController extends Controller
{
    /**
     * Toggle favourite for a product
     */
    public function toggle(Product $product)
    {
        $product->toggleFavorite();
        return $product;
    }


    /**
     * Get the auth user favourite products
     */
    public function favourite()
    {
        return Customer::find(auth()->user()->id)->favorite(Product::class);
    }
}