<?php

namespace App\Http\Controllers;

use Akaunting\Money\Money;
use App\Enums\ApproveStatus;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\ColorChange;
use App\Models\Comment;
use App\Models\Contact;
use App\Models\Order;
use App\Models\PreviewDesign;
use Carbon\Carbon;

class DashboardController extends Controller
{
    /**
     * Return the dashboard page
     */
    public function __invoke()
    {
        return Inertia::render('Dashboard', [
            'totalOrder'  => Money::EUR(Order::whereMonth('date', Carbon::now()->month)->sum('grand_total'), true)->format(),
            'totalColorChange'  => Money::EUR(ColorChange::whereMonth('date', Carbon::now()->month)->sum('grand_total'), true)->format(),
            'totalPreviewDesign'  => Money::EUR(PreviewDesign::whereMonth('date', Carbon::now()->month)->sum('grand_total'), true)->format(),
            'currentMonth' => Carbon::now()->format('M'),
            'pendingColorChange' => ColorChange::where('status', ApproveStatus::PENDING())->count(),
            'pendingPreviewDesign' => PreviewDesign::where('status', ApproveStatus::PENDING())->count(),
            'unansweredMessage'   => Contact::where('answered', false)->count(),
            'orders' => Order::orderBy('id', 'desc')->limit(5)->get(),
            'comments' => Comment::orderBy('id', 'desc')->limit(5)->get()
        ]);
    }
}