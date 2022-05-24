<?php

namespace App\Http\Controllers\Api;

use App\Models\Order;
use App\Models\Product;
use App\Facades\Response;
use App\Models\OrderItem;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Spatie\MediaLibrary\Support\MediaStream;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class DownloadMediaController extends Controller
{
    /**
     * Download media from frontent
     */
    public function orderItem(OrderItem $orderItem)
    {
        if (auth()->user()->id == $orderItem->order->customerId && $orderItem->totalDownload < 3 && $orderItem->age < 2) {
            if ($orderItem->colorChangeId) {
                $mediaItem = $orderItem->colorChange->getMedia('downloadable')->first();
            } else {
                $mediaItem = $orderItem->product->getMedia('downloadable')->first();
            }
            $orderItem->increment('total_download');
            return $mediaItem;
            // return MediaStream::create("design-{$orderItem->id}.zip")->addMedia($mediaItem);
        } else {
            return Response::error('Unauthorized', [], 403);
        }
    }

    /**
     * Download media from frontent
     */
    public function order(Order $order)
    {
        if (auth()->user()->id == $order->customerId) {
            $productIds = $order->orderItems()->pluck('product_id')->toArray();
            // Let's get some media.
            $downloads = Media::whereIn('model_id', $productIds)->where('model_type', Product::class)->get();

            // Download the files associated with the media in a streamed way.
            // No prob if your files are very large.
            if ($downloads) {
                return MediaStream::create("order-{$order->id}.zip")->addMedia($downloads);
            } else {
                Response::error('No media found');
            }
        } else {
            return Response::error('Unauthorized', [], 403);
        }
    }
}