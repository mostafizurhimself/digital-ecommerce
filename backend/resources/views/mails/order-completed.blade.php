@component('mail::message')
{{-- ### Hello {{ $order->customer->name }}, --}}
## Hello, you have just successfully completed your Stock design purchase order {{$order->id}} at {{\App\Facades\Helper::getAppName()}} with invoice <a href="{{config('app.frontend_url')."/profile/orders"}}">{{$order->invoiceNo}}</a>

Thank you for using our services.
You can download your designs here: 

@component('mail::button', ['url' => config('app.frontend_url')."/download/{$order->id}"])
Download
@endcomponent

We recommend you do so as soon as possible, but you have a period of 30 days to download. We cannot guarantee that the link will remain active beyond that due to removing the design from the offer.
Do you want to get a wrap now? Request one at one of our <a href="{{config('app.frontend_url')."/wrapping-companies"}}">Wrapping companies</a>.
You can find all of your purchased designs in <a href="{{config('app.frontend_url')."/profile/designs"}}">My designs</a>.

{{-- Your order successfully placed.

Total Amount {{$order->customerGrandTotalFormatted}} --}}
{{-- 
Thanks,<br>
{{ \App\Facades\Helper::getAppName()}} --}}

@component('mail::subcopy')
<p style="font-weight: bold; color: #636262">
In case you have any questions, please utilize our web support or contact us at <a href="">{{\App\Facades\Helper::getAppEmail()}}</a>.
You're getting this email because you registered an account on wrapstock.com using this email address.
</p>
@endcomponent

@endcomponent