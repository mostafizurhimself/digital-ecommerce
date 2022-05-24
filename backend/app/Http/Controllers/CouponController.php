<?php

namespace App\Http\Controllers;

use App\Enums\PublishStatus;
use Inertia\Inertia;
use App\Models\Coupon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;

class CouponController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        return Inertia::render('Coupons/Index', [
            'coupons' => Coupon::orderBy('id', 'desc')
                ->filter($request->all())
                ->paginate()
                ->withQueryString(),
            'query'  => $request->all(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Coupons/Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'name'          => 'required|string|max:100|unique:coupons',
            'code'          => 'required|string|min:3|max:50|unique:coupons',
            'description'   => 'nullable|string|max:500',
            'amount'        => 'required|numeric|min:0',
            'startFrom'     => 'required|numeric|min:0',
            'availableFrom' => 'required|date',
            'availableTo'   => 'required|date|after:availableFrom',
        ]);

        Coupon::create($request->only('name', 'code', 'amount', 'description', 'startFrom', 'availableFrom', 'availableTo'));

        session()->flash('flash.banner', 'Created successfullly.');
        session()->flash('flash.bannerStyle', 'success');

        return redirect()->route('coupons.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Coupon  $coupon
     * @return \Illuminate\Http\Response
     */
    public function show(Coupon $coupon)
    {
        return Inertia::render('Coupons/Show', [
            'coupon' => $coupon,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Coupon  $coupon
     * @return \Illuminate\Http\Response
     */
    public function edit(Coupon $coupon)
    {
        if ($coupon->status == PublishStatus::PUBLISHED()) {
            abort(403);
        }

        return Inertia::render('Coupons/Edit', [
            'coupon' => $coupon,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Coupon  $coupon
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Coupon $coupon)
    {
        if ($coupon->status == PublishStatus::PUBLISHED()) {
            abort(403);
        }
        $request->validate([
            'name'          => 'required|string|max:100|unique:coupons,id,' . $coupon->id,
            'code'          => 'required|string|min:3|max:50|unique:coupons,id,' . $coupon->id,
            'description'   => 'nullable|string|max:500',
            'amount'        => 'required|numeric|min:0',
            'startFrom'     => 'required|numeric|min:0',
            'availableFrom' => 'required|date',
            'availableTo'   => 'required|date|after:availableFrom',
        ]);

        $coupon->update($request->only('name', 'code', 'amount', 'description', 'startFrom', 'availableFrom', 'availableTo'));

        session()->flash('flash.banner', 'Updated successfullly.');
        session()->flash('flash.bannerStyle', 'success');

        return back();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Coupon  $coupon
     * @return \Illuminate\Http\Response
     */
    public function destroy(Coupon $coupon)
    {
        if ($coupon->status == PublishStatus::PUBLISHED()) {
            abort(403);
        }

        if ($coupon->status == PublishStatus::PUBLISHED()) {
            session()->flash('flash.banner', "Can not delete it now. It is already published");
            session()->flash('flash.bannerStyle', 'danger');
            return;
        }

        if ($coupon->delete()) {
            session()->flash('flash.banner', 'Deleted successfullly.');
            session()->flash('flash.bannerStyle', 'success');
            return back()->with('status', 'Deleted successfully.');
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Models\Coupon  $customer
     * @return \Illuminate\Http\Response
     */
    public function updateStatus(Coupon $coupon)
    {
        if ($coupon->orders()->exists()) {
            $orders = $coupon->orders()->count();
            session()->flash('flash.banner', "There are {$orders} order related to it. You can not delete it now.");
            session()->flash('flash.bannerStyle', 'danger');
            return;
        }

        if ($coupon->status == PublishStatus::UNPUBLISHED()) {
            session()->flash('flash.banner', 'Coupon published successfully.');
            session()->flash('flash.bannerStyle', 'success');
            $coupon->update(['status' => PublishStatus::PUBLISHED()]);
        } else {
            session()->flash('flash.banner', 'Already published.');
            session()->flash('flash.bannerStyle', 'danger');
        }

        return back();
    }
}