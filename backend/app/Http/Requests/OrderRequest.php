<?php

namespace App\Http\Requests;

use App\Enums\VatType;
use Illuminate\Validation\Rule;
use Illuminate\Foundation\Http\FormRequest;

class OrderRequest extends FormRequest
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
        return [
            'customerId'                  => 'required',
            'couponId'                    => 'nullable',
            'customerCurrency'            => 'required',
            'totalAmount'                 => 'required|integer|min:0',
            'customerAmount'              => 'required|integer|min:0',
            'vat'                         => 'required',
            'vatType'                     => ['required', Rule::in(VatType::toArray())],
            'vatAmount'                   => 'required|integer|min:0',
            'customerVatAmount'           => 'required|integer|min:0',
            'totalDiscount'               => 'required|integer|min:0',
            'customerTotalDiscount'       => 'required|integer|min:0',
            'note'                        => 'nullable|string|max:500',
            'orderItems'                  => 'required',
            'orderItems.*.productId'      => 'required',
            'orderItems.*.amount'         => 'required|integer|min:0',
            'orderItems.*.customerAmount' => 'required|integer|min:0',
            'orderItems.*.colorChangeId'  => 'nullable|integer|min:0',
        ];
    }
}