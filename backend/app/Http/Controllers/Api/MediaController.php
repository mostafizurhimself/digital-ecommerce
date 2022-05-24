<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class MediaController extends Controller
{
    /**
     * Remove media from storage
     */
    public function remove(Media $media)
    {
        if ($media->delete()) {
            // session()->flash('flash.banner', 'Remove successful.');
            // session()->flash('flash.bannerStyle', 'success');
            return back();
        }
    }
}
