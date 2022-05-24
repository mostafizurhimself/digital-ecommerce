<?php

namespace App\Http\Controllers;

use App\Models\Vat;
use Inertia\Inertia;
use App\Enums\VatType;
use App\Models\Country;
use App\Enums\SettingsType;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;

class VatController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        return Inertia::render('VatSettings/Index', [
            'vats' => Vat::orderBy('id', 'desc')
                ->filter($request->all())
                ->paginate()
                ->withQueryString(),
            'query'  => $request->all(),

        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('VatSettings/Create', [

            'countries' => Country::orderBy('name')->get(),
            'vatTypes' => VatType::toSelectOptions()
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    { {
            $request->validate([
                'amount' => 'required|numeric|min:00',
                'countryId' => ['required', Rule::unique('vats', 'country_id')],

            ]);


            DB::transaction(function () use ($request) {
                $vat = Vat::create(

                    [
                        'countryId'  => $request->countryId,
                        'amount'     => $request->amount,

                    ]
                );
            });

            return redirect()->route('vats.index');
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Vat $vat)
    {
        return Inertia::render('VatSettings/Edit', [
            'vat' => $vat,
            'countries' => Country::orderBy('name')->get(),
            'vatTypes' => VatType::toSelectOptions()
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Vat $vat)
    { {
            $request->validate([
                'amount' => 'required|numeric|min:00',
                'countryId' => ['required', Rule::unique('vats', 'country_id')->ignore($vat->id)],

            ]);

            $vat->update([
                'amount'    => $request->amount,
                'countryId'    => $request->countryId,

            ]);

            session()->flash('flash.banner', 'Update successfullly.');
            session()->flash('flash.bannerStyle', 'success');

            return back();
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Vat $vat)
    {
        if ($vat->delete()) {
            session()->flash('flash.banner', 'Deleted successfullly.');
            session()->flash('flash.bannerStyle', 'success');

            return back()->with('status', 'Deleted successfully.');
        }
    }
}