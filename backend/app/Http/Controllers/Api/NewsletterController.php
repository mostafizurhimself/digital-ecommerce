<?php

namespace App\Http\Controllers\Api;

use Newsletter;
use App\Facades\Response;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class NewsletterController extends Controller
{
    /**
     * Subscribe for newsletter
     * 
     * @param \Illuminate\Http\Request $request
     * @return void
     */
    public function __invoke(Request $request)
    {
        $this->validate($request, [
            'subscriptionEmail' => 'required|email|max:100',
        ]);

        if (!Newsletter::isSubscribed($request->subscriptionEmail)) {
            Newsletter::subscribe($request->subscriptionEmail);
            return Response::success('Subscribed successfully');
        } else {
            return Response::error('Already subscribed', [], 403);
        }
    }
}