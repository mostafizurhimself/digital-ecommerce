<?php

namespace App\Http\Controllers\Api;

use App\Facades\Response;
use App\Http\Controllers\Controller;
use App\Http\Resources\ApiResource;
use App\Models\Comment;
use App\Models\Product;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    /**
     * Get the comments for the product
     */
    public function index(Product $product)
    {
        return ApiResource::collection($product->comments);
    }

    /**
     * Store comments for the product
     */
    public function store(Request $request, Product $product)
    {
        $this->validate($request, [
            'comment' => 'required|string|max:500'
        ]);

        $comment = $product->comments()->create([
            'comment'     => $request->comment,
            'customer_id' => auth()->user()->id,
        ]);

        return new ApiResource($comment);
    }

    /**
     * Delete a comment
     */
    public function destroy(Comment $comment)
    {
        if ($comment->delete()) {
            return Response::success('Deleted successfully');
        }
    }
}