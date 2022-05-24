<?php

namespace App\Http\Requests;

use App\Enums\VatType;
use Illuminate\Validation\Rule;
use Illuminate\Foundation\Http\FormRequest;

class ColorChangeRequest extends FormRequest
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
            'productId'           => ['required', 'integer'],
            'colors'              => ['required'],
            'color.*.code'        => ['required', 'string'],
            'color.*.description' => ['nullable', 'string', 'max:250'],
            'description'         => ['nullable', 'string', 'max:500'],
            'depositAmount'       => ['required', 'integer', 'min:0'],
            'customerAmount'      => ['required', 'integer', 'min:0'],
            'customerCurrency'    => ['required', 'string'],
            'vat'                 => 'required|integer|min:0',
            'vatType'             => ['required', Rule::in(VatType::toArray())],
            'vatAmount'           => 'required|integer|min:0',
            'customerVatAmount'   => 'required|integer|min:0',
        ];
    }
}