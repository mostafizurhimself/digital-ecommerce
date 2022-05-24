<?php

namespace App\Http\Controllers\Api;

use App\Enums\ActiveStatus;
use App\Models\Customer;
use App\Enums\AddressType;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Resources\ApiResource;
use App\Http\Controllers\Controller;
use Carbon\Carbon;

class CustomerAuthController extends Controller
{
    /**
     * Register a new seller on the application
     *
     * @param \Illuminate\Http\Request $request
     */
    public function register(Request $request)
    {
        // Validate the request
        $validated = $this->validate($request, [
            'name'              => 'required|string|between:2,100',
            'surname'           => 'nullable|string|between:2,100',
            'email'             => 'required|email|max:100|unique:customers',
            'phone'             => 'nullable|string|max:15|unique:customers',
            'password'          => 'required|string|confirmed|min:6',
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

        $customer = DB::transaction(function () use ($request) {
            $customer = Customer::create(array_merge(
                $request->only('name', 'surname', 'email', 'phone', 'companyName', 'euVatNo'),
                ['password' => bcrypt($request->password)]
            ));

            // Set present address
            if (!empty($request->billingAddress)) {
                $customer->address()->create([
                    'type'      => AddressType::BILLING_ADDRESS(),
                    'street'    => $request->billingAddress['street'],
                    'city'      => $request->billingAddress['city'],
                    'zipcode'   => $request->billingAddress['zipcode'],
                    'country'   => $request->billingAddress['country'],
                ]);
            }

            // Set shipping address
            if (!empty($request->shippingAddress)) {
                $customer->address()->create([
                    'type'      => AddressType::SHIPPING_ADDRESS(),
                    'street'    => $request->shippingAddress['street'],
                    'city'      => $request->shippingAddress['city'],
                    'zipcode'   => $request->shippingAddress['zipcode'],
                    'country'   => $request->shippingAddress['country'],
                ]);
            }

            return $customer;
        });
        return new ApiResource($customer);
    }

    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function login()
    {
        $this->validate(request(), [
            'email' => 'required|email',
            'password' => 'required'
        ]);

        $credentials = request(['email', 'password']);
        if (!$token = auth()->attempt($credentials)) {
            return response()->json(['error' => 'Email or password is not correct'], 401);
        }
        auth()->user()->update([
            'lastLogin' => Carbon::now(),
            'status'    => ActiveStatus::ACTIVE()
        ]);

        return $this->respondWithToken($token);
    }

    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        auth()->logout();

        return response()->json(['message' => 'Successfully logged out']);
    }

    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh()
    {
        return $this->respondWithToken(auth()->refresh());
    }

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60
        ]);
    }
}