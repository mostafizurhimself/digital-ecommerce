<?php

namespace App\Http\Controllers;

use App\Models\Faq;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;

class FaqController extends Controller
{


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'type'       => 'required|string|max:100',
            'question'    => 'required|string|max:100',
            'answer'        => 'required|string|max:500',
        ]);

        DB::transaction(function () use ($request) {
            $faq = Faq::create(
                [
                    'type'       => $request->type,
                    'question'    => $request->question,
                    'answer'    => $request->answer,

                ]
            );

        });

        session()->flash('flash.banner', 'Created successfullly.');
        session()->flash('flash.bannerStyle', 'success');

        return redirect()->route('appearance.others');
    }



    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Faq  $faq
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Faq $faq)
    {
        $request->validate([
            'type'       => 'required|string|max:100',
            'question'    => 'required|string|max:100',
            'answer'        => 'required|string|max:500',
        ]);

        DB::transaction(function () use ($request, $faq) {
            $faq->update(
                [
                    'type'       => $request->type,
                    'question'    => $request->question,
                    'answer'    => $request->answer,
                ]
            );

        });

        session()->flash('flash.banner', 'Updated successfullly.');
        session()->flash('flash.bannerStyle', 'success');

        return $request->wantsJson()
        ? new JsonResponse('', 200)
        : back()->with('status', 'Updated successfully');

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Faq  $faq
     * @return \Illuminate\Http\Response
     */
    public function destroy(Faq $faq)
    {
        {
            if ($faq->delete()) {
                session()->flash('flash.banner', 'Faq Deleted successfullly.');
                session()->flash('flash.bannerStyle', 'success');

                return back()->with('status', ' Faq Deleted successfully.');
            }
        }
    }
}
