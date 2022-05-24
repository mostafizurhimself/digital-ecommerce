@component('mail::message')
### Hello {{ $contact->name }},

{{ $contact->reply }}

Thanks,<br>
{{ \App\Facades\Helper::getAppName()}}
@endcomponent
