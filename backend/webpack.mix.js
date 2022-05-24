const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

// mix.js('resources/js/app.js', 'public/js').vue()
//     .postCss('resources/css/app.css', 'public/css', [
//         require('postcss-import'),
//         require('tailwindcss'),
//     ])
//     .webpackConfig(require('./webpack.config'));

// if (mix.inProduction()) {
//     mix.version();
// }


mix.js('resources/js/app.js', 'public/js').vue()
    .sass('resources/scss/app.scss', 'public/css')
    .options({
        postCss: [tailwindcss('./tailwind.config.js')],
    })
    .postCss('resources/css/app.css', 'public/css', [
        require('postcss-import'),
        require('tailwindcss'),
    ])
    .webpackConfig(require('./webpack.config'))
    .version();

if (mix.inProduction()) {
    mix.version();
}


mix.browserSync('http://wrapstock-admin.test');
// mix.browserSync({
//     proxy: 'http://wrapstock-admin.com',
//     host: 'wrapstock-admin.com',
//     // open: 'external',
//     // port: 8080,
//     // notify: false,
// });
