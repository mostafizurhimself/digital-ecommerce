<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Contact;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Jobs\ReplyMessageJob;

class ContactController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        return Inertia::render('Contacts/Index', [
            'contacts' => Contact::filter($request->all())
                ->orderBy('id', 'desc')
                ->paginate()
                ->withQueryString(),
            'query'    => $request->all(),
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Contact  $contact
     * @return \Illuminate\Http\Response
     */
    public function show(Contact $contact)
    {
        return Inertia::render('Contacts/Show', [
            'contact' => $contact,

        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Models\Contact  $contact
     * @return \Illuminate\Http\Response
     */
    public function reply(Request $request, Contact $contact)
    {
        $request->validate([
            'reply' => 'required|string|max:2000',
        ]);

        $contact->update([
            'reply'    => $request->reply,
            'answered' => true
        ]);

        session()->flash('flash.banner', 'Replied successfullly.');
        session()->flash('flash.bannerStyle', 'success');

        return back();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Contact  $contact
     * @return \Illuminate\Http\Response
     */
    public function destroy(Contact $contact)
    {
        if ($contact->delete()) {
            session()->flash('flash.banner', 'Deleted successfullly.');
            session()->flash('flash.bannerStyle', 'success');

            return back()->with('status', 'Deleted successfully.');
        }
    }
}
