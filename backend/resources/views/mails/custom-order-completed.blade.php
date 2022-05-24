@component('mail::message')
### Hello {{ $order->customer->name }},

Your order successfully placed.

Total Amount {{$order->customerGrandTotalFormatted}}

@component('mail::button', ['url' => config('app.frontend_url')."/profile/custom-orders"])
View Details
@endcomponent

Thanks,<br>
{{ \App\Facades\Helper::getAppName() }}
@endcomponent