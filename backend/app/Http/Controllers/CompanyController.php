<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Enums\Service;
use App\Models\Company;
use App\Models\Country;
use App\Models\Customer;
use App\Enums\AddressType;
use App\Enums\ApproveStatus;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;

class CompanyController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        return Inertia::render('Companies/Index', [
            'companies' => Company::orderBy('id', 'desc')
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
        return Inertia::render('Companies/Create', [
            'countries' => Country::orderBy('name')->get(),
            'services'  => Service::toSelectOptions(),
            'customers' => Customer::orderBy('name')->get(),
            'statusOptions'    => ApproveStatus::toSelectOptions()
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // dd($request->all());
        $request->validate([
            'customerId'     => ['required', 'integer'],
            'companyName'    => ['required', 'string', 'max:200'],
            'companyEmail'   => ['required', 'email', Rule::unique('companies', 'company_email')],
            'companyWebsite' => ['nullable', 'url'],
            'service'        => ['required', Rule::in(Service::toArray())],
            'billingAddress'           => 'required|array',
            'billingAddress.street'    => 'required_with:billingAddress|string|max:250',
            'billingAddress.city'      => 'required_with:billingAddress|string|max:250',
            'billingAddress.zipcode'   => 'required_with:billingAddress|string|max:50',
            'billingAddress.country'   => 'required_with:billingAddress|string|max:50',
            'billingAddress.position'  => 'nullable',
            'hasShipping'              => 'required',
            'shippingAddress.street'   => 'required_if:hasShipping,true|max:250',
            'shippingAddress.city'     => 'required_if:hasShipping,true|max:250',
            'shippingAddress.zipcode'  => 'required_if:hasShipping,true|max:50',
            'shippingAddress.country'  => 'required_if:hasShipping,true|max:50',
        ]);

        DB::transaction(function () use ($request) {
            $company = Company::create($request->only('customerId', 'companyName', 'companyEmail', 'companyWebsite', 'service', 'status'));

            // Set billing address
            if (!empty($request->billingAddress)) {
                $company->address()->create([
                    'type'      => AddressType::BILLING_ADDRESS(),
                    'street'    => $request->billingAddress['street'],
                    'city'      => $request->billingAddress['city'],
                    'zipcode'   => $request->billingAddress['zipcode'],
                    'country'   => $request->billingAddress['country'],
                    'position'  => $request->billingAddress['position'] ?? null,
                ]);
            }

            // Set shipping address
            if ($request->hasShipping) {
                $company->address()->updateOrCreate(
                    [
                        'type' => AddressType::SHIPPING_ADDRESS()
                    ],
                    [
                        'type'      => AddressType::SHIPPING_ADDRESS(),
                        'street'    => $request->shippingAddress['street'],
                        'city'      => $request->shippingAddress['city'],
                        'zipcode'   => $request->shippingAddress['zipcode'],
                        'country'   => $request->shippingAddress['country'],
                    ]
                );
            }
        });

        session()->flash('flash.banner', 'Created successfullly.');
        session()->flash('flash.bannerStyle', 'success');

        return redirect()->route('companies.index');
    }


    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Company  $company
     * @return \Illuminate\Http\Response
     */
    public function show(Company $company)
    {
        return Inertia::render('Companies/Show', [
            'company' => $company,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Company  $company
     * @return \Illuminate\Http\Response
     */
    public function edit(Company $company)
    {
        return Inertia::render('Companies/Edit', [
            'company' => $company,
            'countries' => Country::orderBy('name')->get(),
            'services'  => Service::toSelectOptions(),
            'customers' => Customer::orderBy('name')->get(),
            'statusOptions'    => ApproveStatus::toSelectOptions()
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Company  $company
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Company $company)
    {
        // dd($request->all());
        $request->validate([
            'customerId'     => ['required', 'integer'],
            'companyName'    => ['required', 'string', 'max:200'],
            'companyEmail'   => ['required', 'email', Rule::unique('companies', 'company_email')->ignore($company->id)],
            'companyWebsite' => ['nullable', 'url'],
            'service'        => ['required', Rule::in(Service::toArray())],
            'billingAddress'           => 'required|array',
            'billingAddress.street'    => 'required_with:billingAddress|string|max:250',
            'billingAddress.city'      => 'required_with:billingAddress|string|max:250',
            'billingAddress.zipcode'   => 'required_with:billingAddress|string|max:50',
            'billingAddress.country'   => 'required_with:billingAddress|string|max:50',
            'billingAddress.position'  => 'nullable',
            'hasShipping'              => 'required',
            'shippingAddress.street'   => 'required_if:hasShipping,true|max:250',
            'shippingAddress.city'     => 'required_if:hasShipping,true|max:250',
            'shippingAddress.zipcode'  => 'required_if:hasShipping,true|max:50',
            'shippingAddress.country'  => 'required_if:hasShipping,true|max:50',
        ]);

        DB::transaction(function () use ($request, $company) {
            $company->update($request->only('customerId', 'companyName', 'companyEmail', 'companyWebsite', 'service', 'status'));

            // Set billing address
            if (!empty($request->billingAddress)) {
                $company->address()->updateOrCreate(
                    [
                        'type' => AddressType::BILLING_ADDRESS()
                    ],
                    [
                        'type'      => AddressType::BILLING_ADDRESS(),
                        'street'    => $request->billingAddress['street'],
                        'city'      => $request->billingAddress['city'],
                        'zipcode'   => $request->billingAddress['zipcode'],
                        'country'   => $request->billingAddress['country'],
                        'position'  => $request->billingAddress['position'] ?? null,
                    ]
                );
            }

            // Set shipping address
            if ($request->hasShipping) {
                $company->address()->updateOrCreate(
                    [
                        'type' => AddressType::SHIPPING_ADDRESS()
                    ],
                    [
                        'type'      => AddressType::SHIPPING_ADDRESS(),
                        'street'    => $request->shippingAddress['street'],
                        'city'      => $request->shippingAddress['city'],
                        'zipcode'   => $request->shippingAddress['zipcode'],
                        'country'   => $request->shippingAddress['country'],
                    ]
                );
            }
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
     * @param  \App\Models\Company  $company
     * @return \Illuminate\Http\Response
     */
    public function destroy(Company $company)
    {
        if ($company->delete()) {
            session()->flash('flash.banner', 'Deleted successfullly.');
            session()->flash('flash.bannerStyle', 'success');

            return back()->with('status', 'Deleted successfully.');
        }
    }
}
