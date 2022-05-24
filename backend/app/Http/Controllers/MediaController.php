<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class MediaController extends Controller
{
    /**
     * Upload a file
     * Package laravel-directory-cleanup takes care of removing old, unused uploads - see the file of that name in the config dir
     *
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'file' => 'required|file|image|max:2048'
        ]);

        $path = $request->file('file')->store('uploads');
        $file = $request->file('file');

        return response()->json([
            'name'          => $path,
            'original_name' => $file->getClientOriginalName(),
        ]);
    }

    /**
     * Remove media from storage
     */
    public function remove(Media $media)
    {
        if ($media->delete()) {
            return back()->with('Status', 'Deleted successfully.');
        }
    }
}