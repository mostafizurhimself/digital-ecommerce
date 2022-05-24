@component('mail::message')
### Hello {{ $user->name ?? "Admin" }},

A new order has been placed successfully.

@component('mail::panel')
<span style="font-weight: bold">Customer Name:</span> {{$order->customer->name}}<br>
<span style="font-weight: bold">Order Id:</span> {{$order->id}}<br>
<span style="font-weight: bold">Order Amount:</span> {{$order->grandTotalFormatted}}<br>
@endcomponent

@component('mail::button', ['url' => "/orders"])
View Details
@endcomponent

Thanks,<br>
{{ \App\Facades\Helper::getAppName()}}
@endcomponent