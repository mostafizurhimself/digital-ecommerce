<?php

use App\Models\User;
use Inertia\Inertia;
use App\Models\Order;
use App\Models\Contact;
use App\Models\ColorChange;
use App\Models\CustomOrder;
use App\Models\PreviewDesign;
use App\Mail\ReplyMessageMail;
use App\Mail\OrderCompletedMail;
use App\Notifications\NewMessage;
use App\Mail\ColorChangeRequestMail;
use App\Mail\ColorChangeFeedbackMail;
use App\Notifications\NewOrderPlaced;
use Illuminate\Support\Facades\Route;
use App\Mail\CustomOrderCompletedMail;
use App\Mail\PreviewDesignRequestMail;
use App\Http\Controllers\FaqController;
use App\Http\Controllers\TagController;
use App\Http\Controllers\VatController;
use App\Mail\PreviewDesignFeedbackMail;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ColorController;
use App\Http\Controllers\MediaController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\CouponController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\CompanyController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\FeatureController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\VehicleController;
use App\Notifications\NewCustomOrderPlaced;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\HomePageController;
use App\Http\Controllers\SettingsController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\OtherPageController;
use App\Notifications\NewColorChangeRequested;
use App\Http\Controllers\ColorChangeController;
use App\Http\Controllers\CustomOrderController;
use App\Http\Controllers\DesignsPageController;
use App\Http\Controllers\PartnerPageController;
use App\Http\Controllers\VehicleModelController;
use App\Notifications\NewPreviewDesignRequested;
use App\Http\Controllers\ExcelDownloadController;
use App\Http\Controllers\PreviewDesignController;
use App\Http\Controllers\CustomOrderPageController;
use App\Http\Controllers\DesignCharacterController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

// Route::middleware(['auth'])->get('/', function () {
//     return Inertia::render('Dashboard');
// })->name('dashboard');


Route::middleware(['auth'])->group(function () {
    Route::get('/', DashboardController::class)->name('dashboard');
    Route::get('/appearance/home', [HomePageController::class, 'index'])->name('appearance.home');
    Route::post('/appearance/home/hero', [HomePageController::class, 'hero'])->name('appearance.home.hero');
    Route::post('/appearance/home/welcome', [HomePageController::class, 'welcome'])->name('appearance.home.welcome');
    Route::post('/appearance/home/design', [HomePageController::class, 'design'])->name('appearance.home.design');
    Route::post('/appearance/home/custom', [HomePageController::class, 'custom'])->name('appearance.home.custom');
    Route::post('/appearance/home/partner', [HomePageController::class, 'partner'])->name('appearance.home.partner');
    Route::post('/appearance/home/howItWorks', [HomePageController::class, 'howItWorks'])->name('appearance.home.howItWorks');
    // Design page route
    Route::get('/appearance/designs', [DesignsPageController::class, 'index'])->name('appearance.designs');
    Route::post('/appearance/designs/slider', [DesignsPageController::class, 'add'])->name('appearance.designs.slider');
    Route::post('/appearance/designs/slider/{slide}', [DesignsPageController::class, 'edit'])->name('appearance.designs.slider.edit');
    Route::delete('/appearance/designs/slider/{slide}/destroy', [DesignsPageController::class, 'delete'])->name('appearance.designs.slider.delete');
    Route::resource('appearance/features', FeatureController::class)->except('index', 'create', 'show', 'edit');
    // Design Character
    Route::post('/appearance/designs/design-characters', [DesignCharacterController::class, 'store'])->name('appearance.designs.design-character');
    Route::post('/appearance/designs/design-characters/{character}', [DesignCharacterController::class, 'update'])->name('appearance.designs.designs-character.update');
    Route::delete('/appearance/designs/design-characters/{character}/destroy', [DesignCharacterController::class, 'destroy'])->name('appearance.designs.designs-character.delete');



    // Custom Order page route
    Route::get('/appearance/custom-orders', [CustomOrderPageController::class, 'index'])->name('appearance.custom-orders');
    Route::post('/appearance/custom-orders/slider', [CustomOrderPageController::class, 'add'])->name('appearance.custom-orders.slider');
    Route::post('/appearance/custom-orders/slider/{slide}', [CustomOrderPageController::class, 'edit'])->name('appearance.custom-orders.slider.edit');
    Route::delete('/appearance/custom-orders/slider/{slide}', [CustomOrderPageController::class, 'delete'])->name('appearance.custom-orders.slider.delete');
    Route::post('/appearance/custom-orders/banner', [CustomOrderPageController::class, 'banner'])->name('appearance.custom-orders.banner');

    // Partner page routes
    Route::get('/appearance/partner', [PartnerPageController::class, 'index'])->name('appearance.partner');
    Route::post('/appearance/partner', [PartnerPageController::class, 'store'])->name('appearance.partner.store');

    // Other page routes
    Route::get('/appearance/others', [OtherPageController::class, 'index'])->name('appearance.others');
    Route::resource('appearance/faqs', FaqController::class)->except('index', 'create', 'show', 'edit');
    Route::post('/appearance/others/terms-and-conditions', [OtherPageController::class, 'termsCondition'])->name('appearance.others.terms');
    Route::post('/appearance/others/how-It-Works', [OtherPageController::class, 'howItWork'])->name('appearance.others.howItWorks');

    // Setting route
    Route::get('/settings', [SettingsController::class, 'index'])->name('settings');
    Route::post('/settings/website', [SettingsController::class, 'website'])->name('settings.website');
    // Route::post('/settings/vat', [SettingsController::class, 'vat'])->name('settings.vat');
    Route::resource('/vats', VatController::class);


    //Resource Route
    Route::resource('colors', ColorController::class);
    Route::resource('categories', CategoryController::class);
    Route::resource('tags', TagController::class);
    Route::resource('products', ProductController::class);
    Route::post('/products/{product}/published', [ProductController::class, 'published'])->name('products.published');
    Route::get('/orders/{order}/invoice', [OrderController::class, 'invoice'])->name('orders.invoice');
    Route::resource('orders', OrderController::class);
    Route::resource('customers', CustomerController::class)->only('index', 'show');
    Route::post('/customers/{customer}/update-status', [CustomerController::class, 'updateStatus'])->name('customers.update-status');
    Route::resource('users', UserController::class);
    Route::resource('vehicles', VehicleController::class);
    Route::resource('vehicle-model', VehicleModelController::class)->except('show', 'index', 'edit');
    Route::resource('custom-orders', CustomOrderController::class)->only('index', 'show', 'update');

    Route::resource('color-changes', ColorChangeController::class)->only('index', 'show', 'update');
    Route::resource('preview-designs', PreviewDesignController::class)->only('index', 'show', 'update');
    Route::resource('companies', CompanyController::class);
    Route::resource('contacts', ContactController::class)->only('index', 'show', 'destroy');
    Route::post('/contacts/{contact}/reply', [ContactController::class, 'reply'])->name('contacts.reply');
    Route::resource('comments', CommentController::class)->only('index', 'show', 'destroy');
    Route::resource('coupons', CouponController::class);
    Route::post('/coupons/{coupon}/update-status', [CouponController::class, 'updateStatus'])->name('coupons.update-status');

    // Media routes
    Route::delete('media/{media}', [MediaController::class, 'remove'])->name('media.remove');

    // Excel Routes
    Route::get('/download-excel/customers', [ExcelDownloadController::class, 'customer'])->name('download-excel.customers');
    Route::get('/download-excel/orders', [ExcelDownloadController::class, 'order'])->name('download-excel.orders');
    Route::get('/download-excel/custom-orders', [ExcelDownloadController::class, 'customOrder'])->name('download-excel.custom-orders');
    Route::get('/download-excel/color-changes', [ExcelDownloadController::class, 'colorChange'])->name('download-excel.color-changes');
    Route::get('/download-excel/preview-designs', [ExcelDownloadController::class, 'previewDesign'])->name('download-excel.preview-designs');
});






// Email routes
Route::get('orders/{order}/mail', function (Order $order) {
    return new OrderCompletedMail($order);
});

Route::get('custom-orders/{order}/mail', function (CustomOrder $order) {
    return new CustomOrderCompletedMail($order);
});

Route::get('color-changes/{colorChange}/request/mail', function (ColorChange $colorChange) {
    return new ColorChangeRequestMail($colorChange);
});

Route::get('preview-designs/{design}/request/mail', function (PreviewDesign $design) {
    return new PreviewDesignRequestMail($design);
});

Route::get('color-changes/{colorChange}/feedback/mail', function (ColorChange $colorChange) {
    return new ColorChangeFeedbackMail($colorChange);
});

Route::get('preview-designs/{design}/feedback/mail', function (PreviewDesign $design) {
    return new PreviewDesignFeedbackMail($design);
});

Route::get('messages/{message}/reply', function (Contact $message) {
    return new ReplyMessageMail($message);
});

// Admin user notifications
Route::get('orders/{order}/notification', function (Order $order) {
    return (new NewOrderPlaced($order))->toMail($order->customer->email);
});

Route::get('custom-orders/{order}/notification', function (CustomOrder $order) {
    return (new NewCustomOrderPlaced($order))->toMail($order->customer->email);
});

Route::get('color-changes/{colorChange}/notification', function (ColorChange $colorChange) {
    return (new NewColorChangeRequested($colorChange))->toMail($colorChange->customer->email);
});

Route::get('preview-designs/{design}/notification', function (PreviewDesign $design) {
    return (new NewPreviewDesignRequested($design))->toMail($design->customer->email);
});

Route::get('messages/{message}/notification', function (Contact $message) {
    return (new NewMessage($message))->toMail($message->email);
});
