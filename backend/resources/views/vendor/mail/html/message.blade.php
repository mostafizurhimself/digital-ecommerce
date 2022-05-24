@component('mail::layout')
{{-- Header --}}
@slot('header')
@component('mail::header', ['url' => config('app.url')])
{{ \App\Facades\Helper::getAppName()}}
@endcomponent
@endslot

{{-- Body --}}
{{ $slot }}

{{-- Subcopy --}}
@isset($subcopy)
@slot('subcopy')
@component('mail::subcopy')
{{ $subcopy }}
@endcomponent
@endslot
@endisset

{{-- Footer --}}
@slot('footer')
@component('mail::footer')
<p style="margin-bottom:5px;">
<a style="margin-right: 1rem" href="https://www.instagram.com/wrapmotif/">Instragram</a>
<a style="margin-right: 1rem" href="https://m.youtube.com/channel/UCD7bjVm5rnqXtod0vBgiwUQ">Youtube</a>
<a href="https://nl.pinterest.com/wrapmotif/_saved/">Pinterest</a>
</p>
<p>
© {{ date('Y') }} {{ \App\Facades\Helper::getAppName() }}. @lang('All rights reserved.')
</p>
@endcomponent
@endslot
@endcomponent
