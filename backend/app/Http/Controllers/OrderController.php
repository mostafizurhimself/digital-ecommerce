<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Inertia\Inertia;
use App\Models\Order;
use App\Models\Settings;
use App\Enums\SettingsType;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        return Inertia::render('Orders/Index', [
            'orders' => Order::orderBy('id', 'desc')
                ->filter($request->all())
                ->whereBetween(DB::raw('date(created_at)'), [Carbon::parse($request->from ?? "00-00-00"), Carbon::parse($request->to ?? null)])
                ->paginate()
                ->withQueryString(),
            'query'  => $request->all(),
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function show(Order $order)
    {
        return Inertia::render('Orders/Show', [
            'order' => $order->load('orderItems'),
        ]);
    }


    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function invoice(Order $order)
    {
        return Inertia::render('Orders/Invoice', [
            'order' => $order->load('orderItems'),
            'website'  => Settings::where('name', SettingsType::WEBSITE())->first() ?? null,

        ]);
    }
}
