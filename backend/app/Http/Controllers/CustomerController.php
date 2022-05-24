<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Customer;
use App\Enums\ActiveStatus;
use Illuminate\Http\Request;
use App\Exports\CustomersExport;
use App\Http\Controllers\Controller;


class CustomerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        return Inertia::render('Customers/Index', [
            'customers' => Customer::filter($request->all())
                ->orderBy('id', 'desc')
                ->paginate()
                ->withQueryString(),
            'query'         => $request->all(),
            'statusOptions' => ActiveStatus::toSelectOptions(),
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Customer  $customer
     * @return \Illuminate\Http\Response
     */
    public function show(Customer $customer)
    {
        return Inertia::render('Customers/Show', [
            'customer' => $customer->load('company'),

        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Models\Customer  $customer
     * @return \Illuminate\Http\Response
     */
    public function updateStatus(Customer $customer)
    {
        if ($customer->status == ActiveStatus::ACTIVE()) {
            $customer->update(['status' => ActiveStatus::INACTIVE()]);
            session()->flash('flash.banner', 'Customer inactive successful.');
            session()->flash('flash.bannerStyle', 'success');
        } else {
            session()->flash('flash.banner', 'Customer active successful.');
            session()->flash('flash.bannerStyle', 'success');
            $customer->update(['status' => ActiveStatus::ACTIVE()]);
        }

        return back();
    }
}