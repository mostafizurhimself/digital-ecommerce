<?php

namespace App\Http\Controllers\Api;

use App\Models\Customer;
use App\Facades\Response;
use App\Enums\AddressType;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Resources\ApiResource;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;

class CustomerProfileController extends Controller
{
    /**
     * Get the authenticated customer profile.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function profile()
    {
        $customer = Customer::find(auth()->user()->id)->load('company');
        return new ApiResource($customer);
    }

    /**
     * Update authenticated customer profile.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function updateProfile(Request $request)
    {
        $validated = $this->validate($request, [
            'name'              => 'required|string|between:2,100',
            'surname'           => 'nullable|string|between:2,100',
            'phone'             => 'nullable|string|max:15|unique:customers,phone,' . auth()->user()->id,
            'companyName'       => 'nullable|string|max:100',
            'euVatNo'           => 'nullable|string|max:100|vat_number',
            'billingAddress'           => 'required|array',
            'billingAddress.street'    => 'required_with:billingAddress|string|max:250',
            'billingAddress.city'      => 'required_with:billingAddress|string|max:250',
            'billingAddress.zipcode'   => 'required_with:billingAddress|string|max:50',
            'billingAddress.country'   => 'required_with:billingAddress|string|max:50',
            'shippingAddress'          => 'nullable|array',
            'shippingAddress.street'   => 'required_with:shippingAddress|string|max:250',
            'shippingAddress.city'     => 'required_with:shippingAddress|string|max:250',
            'shippingAddress.zipcode'  => 'required_with:shippingAddress|string|max:50',
            'shippingAddress.country'  => 'required_with:shippingAddress|string|max:50',
        ]);

        DB::transaction(function () use ($request) {
            auth()->user()->update(array_merge(
                $request->only('name', 'surname', 'email', 'phone', 'companyName', 'euVatNo')
            ));

            // Set present address
            if (!empty($request->billingAddress)) {
                auth()->user()->address()->updateOrCreate(
                    [
                        'type'      => AddressType::BILLING_ADDRESS(),
                    ],
                    [
                        'street'    => $request->billingAddress['street'],
                        'city'      => $request->billingAddress['city'],
                        'zipcode'   => $request->billingAddress['zipcode'],
                        'country'   => $request->billingAddress['country'],
                    ]
                );
            }

            // Set shipping address
            if (!empty($request->shippingAddress)) {
                auth()->user()->address()->updateOrCreate(
                    [
                        'type'      => AddressType::SHIPPING_ADDRESS(),
                    ],
                    [
                        'street'    => $request->shippingAddress['street'],
                        'city'      => $request->shippingAddress['city'],
                        'zipcode'   => $request->shippingAddress['zipcode'],
                        'country'   => $request->shippingAddress['country'],
                    ]
                );
            }
        });
        return new ApiResource(auth()->user());
    }

    /**
     * Reset password for auth user
     */
    public function changePassword(Request $request)
    {
        $this->validate($request, [
            'oldPassword' => 'required|string|min:6',
            'password'    => 'required|string|confirmed|min:6',
        ]);
        if (Hash::check($request->oldPassword, auth()->user()->password)) {
            auth()->user()->update(['password' => Hash::make($request->password)]);
            return Response::success("Password updated successfully.");
        }
        return Response::error("Old password doesn't matched.");
    }

    /**
     * Update profile photo
     */
    public function updateProfilePhoto(Request $request)
    {
        $this->validate($request, [
            'photo' => 'required|image|mimes:png,jpg,jpeg|max:2000'
        ]);

        auth()->user()->addMedia($request->photo)->toMediaCollection('profile-photo');

        return new ApiResource(auth()->user());
    }
}