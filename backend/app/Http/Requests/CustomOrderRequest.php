<?php

namespace App\Http\Requests;

use App\Enums\VatType;
use Illuminate\Validation\Rule;
use Illuminate\Foundation\Http\FormRequest;

class CustomOrderRequest extends FormRequest
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
            'customerId'               => 'required',
            'vehicleId'                => 'required|integer',
            'vehicleModelId'           => 'required|integer',
            'bodywork'                 => 'required|string|max:100',
            'vehicleManufactureYear'   => 'required|max:100',
            'vehicleColor'             => 'required|string|max:100',
            'vehicleNote'              => 'nullable|string|max:500',
            'notConditioned'           => 'required|integer',
            'designNote'               => 'nullable|string|max:500',
            'categoryId'               => 'required',
            'rangeFrom'                => 'required|integer|min:0',
            'rangeTo'                  => 'required|integer|min:0',
            'depositAmount'            => 'required|integer|min:0',
            'customerAmount'           => 'required|integer|min:0',
            'customerCurrency'         => 'required|string',
            'vat'                      => 'required|integer|min:0',
            'vatType'                  => ['required', Rule::in(VatType::toArray())],
            'vatAmount'                => 'required|integer|min:0',
            'customerVatAmount'        => 'required|integer|min:0',
            'colors'                   => 'required',
            'colors.*'                 => 'required|integer',
            'tags'                     => 'required',
            'tags.*'                   => 'required|integer',
            'products'                 => 'required',
            'products.*'               => 'required|integer',
            // Medias
            'vehiclePhotos.*'          => 'required|image|mimes:jpg,png,jpeg',
            'referenceDesigns.*'       => 'required|image|mimes:jpg,png,jpeg',
        ];
    }
}