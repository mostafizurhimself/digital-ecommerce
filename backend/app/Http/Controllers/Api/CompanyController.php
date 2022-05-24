<?php

namespace App\Http\Controllers\Api;

use App\Models\Company;
use App\Models\Customer;
use App\Facades\Response;
use App\Enums\AddressType;
use App\Enums\ApproveStatus;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Resources\ApiResource;
use App\Http\Controllers\Controller;
use App\Http\Requests\CompanyRequest;

class CompanyController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        // return ApiResource::collection(Company::orderBy('id', 'desc')->filter($request->all())->where('status', ApproveStatus::APPROVED())->get());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CompanyRequest $request)
    {
        $customer = Customer::find(auth()->user()->id);
        DB::transaction(function () use ($request, $customer) {
            $company = $customer->company()->create($request->only('companyName', 'companyEmail', 'companyWebsite', 'service'));

            // Set billing address
            if (!empty($request->billingAddress)) {
                $company->address()->create([
                    'type'      => AddressType::BILLING_ADDRESS(),
                    'street'    => $request->billingAddress['street'],
                    'city'      => $request->billingAddress['city'],
                    'zipcode'   => $request->billingAddress['zipcode'],
                    'country'   => $request->billingAddress['country'],
                ]);
            }

            // Set shipping address
            if (!empty($request->shippingAddress)) {
                $company->address()->create([
                    'type'      => AddressType::SHIPPING_ADDRESS(),
                    'street'    => $request->shippingAddress['street'],
                    'city'      => $request->shippingAddress['city'],
                    'zipcode'   => $request->shippingAddress['zipcode'],
                    'country'   => $request->shippingAddress['country'],
                ]);
            }
        });
        return new ApiResource($customer);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Company  $company
     * @return \Illuminate\Http\Response
     */
    public function show(Company $company)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Company  $company
     * @return \Illuminate\Http\Response
     */
    public function update(CompanyRequest $request, Company $company)
    {

        DB::transaction(function () use ($request, $company) {
            $company->update($request->only('companyName', 'companyEmail', 'companyWebsite'));

            // Set billing address
            if (!empty($request->billingAddress)) {
                $company->address()->updateOrCreate(
                    [
                        'type'      => AddressType::BILLING_ADDRESS(),
                    ],
                    [
                        'type'      => AddressType::BILLING_ADDRESS(),
                        'street'    => $request->billingAddress['street'],
                        'city'      => $request->billingAddress['city'],
                        'zipcode'   => $request->billingAddress['zipcode'],
                        'country'   => $request->billingAddress['country'],
                    ]
                );
            }

            // Set shipping address
            if (!empty($request->shippingAddress)) {
                $company->address()->updateOrCreate(
                    [
                        'type'      => AddressType::SHIPPING_ADDRESS(),
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

        return new ApiResource($company);
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
            return Response::success('Deleted successfully');
        }
    }
}