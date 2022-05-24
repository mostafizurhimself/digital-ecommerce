<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\DesignCharacter;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;

class DesignCharacterController extends Controller
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
            'categoryId'    => ['required', Rule::unique('design_characters', 'category_id')],
            'depositAmount' => 'required|numeric|min:0',
            'image'         => 'required|image|max:10240|mimes:jpg,jpeg,png',
        ]);

        DB::transaction(function () use ($request) {
            $designCharacter = DesignCharacter::create($request->except('image', 'primaryMediaUrl'));


            if ($request->hasFile('image')) {
                $designCharacter->addMedia($request->image)->toMediaCollection('primary');
            }
        });

        session()->flash('flash.banner', 'Created successfullly.');
        session()->flash('flash.bannerStyle', 'success');

        return redirect()->route('appearance.designs');
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\DesignCharacter  $designCharacter
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, DesignCharacter $character)
    {
        $request->validate([
            'categoryId'    => ['required',  Rule::unique('design_characters', 'category_id')->ignore($character->id)],
            'depositAmount' => 'required|numeric|min:0',
            'image'         => 'nullable|image|max:10240|mimes:jpg,jpeg,png',
        ]);

        DB::transaction(function () use ($character, $request) {
            $character->update($request->except('image', 'primaryMediaUrl'));


            if ($request->hasFile('image')) {
                $character->addMedia($request->image)->toMediaCollection('primary');
            }
        });

        session()->flash('flash.banner', 'Created successfullly.');
        session()->flash('flash.bannerStyle', 'success');

        return redirect()->route('appearance.designs');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\DesignCharacter  $designCharacter
     * @return \Illuminate\Http\Response
     */
    public function destroy(DesignCharacter $character)
    {
        if ($character->delete()) {
            session()->flash('flash.banner', 'Deleted successfullly.');
            session()->flash('flash.bannerStyle', 'success');

            return back()->with('status', 'Deleted successfully.');
        }
    }
}