<?php

namespace App\Http\Controllers\Api;

use App\Facades\Response;
use App\Models\Contact;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\ContactRequest;

class ContactController extends Controller
{
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(ContactRequest $request)
    {
        $contact = Contact::create($request->validated());

        if ($contact) {
            return Response::success('Message sent successfully');
        }
        return Response::error('Message sent failed');
    }
}