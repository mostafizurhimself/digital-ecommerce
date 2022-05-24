<?php

namespace App\Http\Requests;

use App\Enums\Service;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class CompanyRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        switch ($this->method()) {
            case 'GET':
            case 'DELETE': {
                    return [];
                }
            case 'POST': {
                    return [
                        'companyName'    => ['required', 'string', 'max:200'],
                        'companyEmail'   => ['required', 'email', Rule::unique('companies', 'company_email')],
                        'companyWebsite' => ['nullable', 'url'],
                        'service'        => ['required', Rule::in(Service::toArray())],
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
                    ];
                }
            case 'PUT':
            case 'PATCH': {
                    return [
                        'companyName'    => ['required', 'string', 'max:200'],
                        'companyEmail'   => ['required', 'email', Rule::unique('companies', 'company_email')->ignore($this->company->id)],
                        'companyWebsite' => ['nullable', 'url'],
                        'service'        => ['required', Rule::in(Service::toArray())],
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
                    ];
                }
            default:
                break;
        }
    }
}