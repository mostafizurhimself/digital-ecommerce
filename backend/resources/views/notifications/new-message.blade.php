@component('mail::message')
### Hello {{ $user->name ?? "Admin" }},

<p style="font-style:italic">{{$contact->subject}}</p>

@component('mail::button', ['url' => "/contacts/{$contact->id}"])
Reply
@endcomponent

From,<br>
{{$contact->name}}<br>
{{$contact->email}}<br>
{{ \App\Facades\Helper::getAppName()}}
@endcomponent
