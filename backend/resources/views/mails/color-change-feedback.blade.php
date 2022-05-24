@component('mail::message')
# Hello {{$colorChange->customer->name}},

{{$colorChange->feedback}}

@component('mail::button', ['url' => config('app.frontend_url')."/profile/color-changes"])
View Details
@endcomponent

Thanks,<br>
{{ \App\Facades\Helper::getAppName() }}
@endcomponent
