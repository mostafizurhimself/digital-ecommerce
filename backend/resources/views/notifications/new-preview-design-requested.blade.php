@component('mail::message')
### Hello {{ $user->name ?? "Admin" }},

A new preview design has been requested.

@component('mail::panel')
<span style="font-weight: bold">Customer Name:</span> {{$design->customer->name}}<br>
<span style="font-weight: bold">Preview Design Id:</span> {{$design->id}}<br>
@endcomponent

@component('mail::button', ['url' => "/preview-designs"])
View Details
@endcomponent

Thanks,<br>
{{ \App\Facades\Helper::getAppName()}}
@endcomponent