<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MediaController;
use App\Http\Controllers\VehicleController;
use App\Http\Controllers\Api\AjaxController;
use App\Http\Controllers\Api\OrderController;
use App\Http\Controllers\Api\ConfigController;
use App\Http\Controllers\Api\CommentController;
use App\Http\Controllers\Api\CompanyController;
use App\Http\Controllers\Api\ContactController;
use App\Http\Controllers\Api\PaymentController;
use App\Http\Controllers\Api\ProductController;
use App\Http\Controllers\Api\FavouriteController;
use App\Http\Controllers\Api\NewsletterController;
use App\Http\Controllers\Api\ColorChangeController;
use App\Http\Controllers\Api\CustomOrderController;
use App\Http\Controllers\Api\CustomerAuthController;
use App\Http\Controllers\Api\DownloadMediaController;
use App\Http\Controllers\Api\PreviewDesignController;
use App\Http\Controllers\Api\ResetPasswordController;
use App\Http\Controllers\Api\ForgotPasswordController;
use App\Http\Controllers\Api\CustomerProfileController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::group(['middleware' => ['assign.guard:customers']], function () {
    Route::post('/register', [CustomerAuthController::class, 'register']);
    Route::post('/login', [CustomerAuthController::class, 'login']);
    Route::post('/refresh', [CustomerAuthController::class, 'refresh']);

    Route::group(['middleware' => ['jwt.auth']], function () {
        Route::post('/logout', [CustomerAuthController::class, 'logout']);

        // Profile routes
        Route::get('/profile', [CustomerProfileController::class, 'profile']);
        Route::post('/profile', [CustomerProfileController::class, 'updateProfile']);
        Route::post('/profile-photo', [CustomerProfileController::class, 'updateProfilePhoto']);
        Route::post('/change-password', [CustomerProfileController::class, 'changePassword']);
        Route::apiResource('companies', CompanyController::class)->except('index', 'show');


        Route::post('favourites/{product}/toggle', [FavouriteController::class, 'toggle']);
        Route::get('favourites', [FavouriteController::class, 'favourite']);

        Route::get('/comments/{product}', [CommentController::class, 'index']);
        Route::post('/comments/{product}', [CommentController::class, 'store']);
        Route::delete('/comments/{comment}', [CommentController::class, 'destroy']);

        Route::apiResource('orders', OrderController::class)->except('update', 'delete');
        Route::get('order-items', [OrderController::class, 'orderItems']);
        Route::apiResource('/custom-orders', CustomOrderController::class)->except('update', 'delete');
        Route::apiResource('color-changes', ColorChangeController::class)->except('update', 'delete');
        Route::apiResource('preview-designs', PreviewDesignController::class)->except('update', 'delete');
        // Payment routes
        Route::post('/payments/orders/stripe', [PaymentController::class, 'order']);
        Route::post('/payments/color-changes/stripe', [PaymentController::class, 'colorChange']);
        Route::post('/payments/custom-orders/stripe', [PaymentController::class, 'customOrder']);
        Route::post('/payments/preview-designs/stripe', [PaymentController::class, 'previewDesign']);

        // Download Media
        Route::post('orderItems/{orderItem}/download', [DownloadMediaController::class, 'orderItem']);
        Route::post('orders/{order}/download', [DownloadMediaController::class, 'order']);
    });
});
Route::get('/orders/{order}/invoice', [OrderController::class, 'invoice']);

// Reset password routes
Route::post('/forgot-password', [ForgotPasswordController::class, 'sendPasswordResetLink']);
Route::post('/reset-password', [ResetPasswordController::class, 'callResetPassword']);

// Ajax Routes
Route::get('/countries', [AjaxController::class, 'country']);
Route::get('/tags', [AjaxController::class, 'tag']);
Route::get('/colors', [AjaxController::class, 'color']);
Route::get('/categories', [AjaxController::class, 'category']);
Route::post('/search-customer', [AjaxController::class, 'searchCustomer']);
Route::get('/vehicles', [AjaxController::class, 'vehicle']);
Route::get('/body-works', [AjaxController::class, 'bodyWork']);
Route::get('/design-characters', [AjaxController::class, 'designCharacter']);
Route::get('/faqs', [AjaxController::class, 'faqs']);
Route::get('/vehicles/{vehicle}/vehicle-models', [AjaxController::class, 'vehicleModel']);
Route::get('/companies', [AjaxController::class, 'company']);
Route::post('/verify-coupon', [AjaxController::class, 'verifyCoupon']);
Route::get('products', [ProductController::class, 'index']);
Route::get('products/{product}', [ProductController::class, 'show']);
Route::get('/products/{product}/auth', [ProductController::class, 'showForAuth'])->middleware(['assign.guard:customers', 'jwt.auth']);

// Others
Route::post('/contacts', ContactController::class);
Route::post('/subscribe', NewsletterController::class);

Route::get('/config', [ConfigController::class, 'index']);
Route::get('/exchange-rates', [AjaxController::class, 'exchangeRate']);