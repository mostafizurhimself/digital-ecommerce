@component('mail::message')
### Hello {{ $user->name ?? "Admin" }},

A new color change has been requested.

@component('mail::panel')
<span style="font-weight: bold">Customer Name:</span> {{$colorChange->customer->name}}<br>
<span style="font-weight: bold">Color Change Id:</span> {{$colorChange->id}}<br>
@endcomponent

@component('mail::button', ['url' => "/color-changes"])
View Details
@endcomponent

Thanks,<br>
{{ \App\Facades\Helper::getAppName()}}
@endcomponent