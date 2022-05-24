<?php

namespace App\Http\Controllers\Api;

use App\Models\Faq;
use App\Models\Tag;
use App\Models\Color;
use App\Enums\FaqType;
use App\Enums\Bodywork;
use App\Models\Company;
use App\Models\Country;
use App\Models\Product;
use App\Models\Vehicle;
use App\Models\Category;
use App\Models\Customer;
use App\Enums\ApproveStatus;
use Illuminate\Http\Request;
use App\Models\DesignCharacter;
use App\Http\Resources\ApiResource;
use App\Http\Controllers\Controller;
use AmrShawky\LaravelCurrency\Facade\Currency;
use App\Enums\PublishStatus;
use App\Facades\Response;
use App\Models\Coupon;
use Carbon\Carbon;

class AjaxController extends Controller
{
    /**
     * Get the available country list
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function country()
    {
        return Country::pluck('name')->toArray();
    }

    /**
     * Get the available Tag list
     *
     */
    public function tag()
    {
        return ApiResource::collection(Tag::orderBy('name')->get());
    }

    /**
     * Get the available Color list
     *
     */
    public function color()
    {
        return ApiResource::collection(Color::orderBy('id', 'desc')->get());
    }

    /**
     * Get the available vehicle list
     *
     */
    public function vehicle()
    {
        return ApiResource::collection(Vehicle::orderBy('id', 'desc')->get());
    }


    /**
     * Get the available Design Character list
     *
     */
    public function designCharacter()
    {
        return ApiResource::collection(DesignCharacter::orderBy('id', 'desc')->get());
    }

    /**
     * Get the available Bodywork list
     *
     */
    public function bodywork()
    {
        return Bodywork::toSelectOptions();
    }

    /**
     * Get the vehicle models by vehicle
     */
    public function vehicleModel(Vehicle $vehicle)
    {
        return ApiResource::collection($vehicle->vehicleModels);
    }

    /**
     * Get the available Product list
     *
     */
    public function category()
    {
        return ApiResource::collection(Category::orderBy('name')->get());
    }

    /**
     * Get the vehicle models by vehicle
     */
    public function faqs(Faq $faq)
    {
        $data = [
            'customer' => Faq::where('type', FaqType::CUSTOMER())->get(),
            'wrapping_company' => Faq::where('type', FaqType::COMPANY())->get()
        ];
        return ApiResource::collection($data);
    }

    /**
     * Get the company list
     */
    public function company(Request $request)
    {
        return ApiResource::collection(Company::filter($request->all())->where('status', ApproveStatus::APPROVED())->orderBy('id', 'desc')->get());
    }

    /**
     * Search customer via email
     */
    public function searchCustomer(Request $request)
    {
        $this->validate($request, [
            'email' => 'required|email',
        ]);

        return Customer::where('email', $request->email)->first() ?? null;
    }

    /**
     * Get currency exchange rates
     */
    public function exchangeRate()
    {
        return Currency::convert()
            ->from('EUR')
            ->to('USD')
            ->get();
    }

    /**
     * Verify coupon
     */
    public function verifyCoupon(Request $request)
    {
        $this->validate($request, [
            'couponCode'  => 'required|string|max:50',
            'orderAmount' => 'required|numeric',
            'customerId'  => 'required|integer',
        ]);

        $coupon = Coupon::where('code', $request->couponCode)
            ->whereDate('available_from', '<=', Carbon::today()->toDateString())
            ->whereDate('available_to', '>=', Carbon::today()->toDateString())
            ->where('start_from', '<=', $request->orderAmount)
            ->whereStatus(PublishStatus::PUBLISHED())
            ->first();

        // If coupon code not valid
        if (empty($coupon)) {
            return Response::error('Invalid coupon code', [], 404);
        }

        // Check coupon is available for users
        if ($coupon->orders()->where('customer_id', $request->customerId)->first()) {
            return Response::error('Coupon already used', [], 404);
        }

        return new ApiResource($coupon);
    }
}