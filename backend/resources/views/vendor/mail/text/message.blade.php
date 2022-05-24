@component('mail::layout')
    {{-- Header --}}
    @slot('header')
        @component('mail::header', ['url' => config('app.url')])
            {{ \App\Facades\Helper::getAppName() }}
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
            <p>
                <a href="#">Instragram</a>
                <a href="#">Youtube</a>
                <a href="#">Pinterest</a>
            </p>
            <p>
                © {{ date('Y') }} {{ \App\Facades\Helper::getAppName() }}. @lang('All rights reserved.')
            </p>
        @endcomponent
    @endslot
@endcomponent
