@component('mail::message')
# Hello {{$design->customer->name}},

{{$design->feedback}}

@component('mail::button', ['url' => config('app.frontend_url')."/profile/preview-designs"])
View Details
@endcomponent

Thanks,<br>
{{ \App\Facades\Helper::getAppName() }}
@endcomponent
