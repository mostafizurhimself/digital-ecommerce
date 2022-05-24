<tr>
    <td class="header">
        <a href="{{ $url }}" style="display: inline-block;">
            @if (\App\Facades\Helper::getDarkLogo())
                <img src="{{ \App\Facades\Helper::getDarkLogo() }}" class="logo" alt="Logo" style="width: auto">
            @else
                <img src="https://laravel.com/img/notification-logo.png" class="logo" alt="Logo">
            @endif
            {{-- @if (trim($slot) === 'Laravel')
            @else
                {{ $slot }}
            @endif --}}
        </a>
    </td>
</tr>
