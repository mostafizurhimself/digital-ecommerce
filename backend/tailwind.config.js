const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    purge: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './vendor/laravel/jetstream/**/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
            transitionProperty: {
                'width': 'width',
                'height': 'height',
            },
            colors: {
                primary: {
                    "100": "#78a1f3",
                    "200": "#6291f1",
                    "300": "#4b81ef",
                    "400": "#3572ed",
                    "500": "#1e62eb",
                    "600": "#1b58d4",
                    "700": "#184ebc",
                    "800": "#1545a5",
                    "900": "#123b8d",
                }
            },
        },
    },

    variants: {
        extend: {
            opacity: ['disabled'],
            fill: ['focus', 'group-hover'],
        },
    },

    plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
