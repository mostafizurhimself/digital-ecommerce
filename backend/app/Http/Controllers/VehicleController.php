<?php

namespace App\Http\Controllers;

use App\Models\Vehicle;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class VehicleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {

        return Inertia::render('Vehicles/Index', [
            'vehicles' => Vehicle::orderBy('id', 'desc')
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
        return Inertia::render('Vehicles/Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $validated = $request->validate([
            'name' => 'required|string|max:100',
            'description' => 'nullable|string|max:500',

        ]);

        Vehicle::create($validated);

        session()->flash('flash.banner', 'Created successfullly.');
        session()->flash('flash.bannerStyle', 'success');

        return redirect()->route('vehicles.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Vehicle  $vehicle
     * @return \Illuminate\Http\Response
     */
    public function show(Vehicle $vehicle)
    {

        return Inertia::render('Vehicles/Show', [
            'vehicle' => $vehicle->load('vehicleModels'),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Vehicle  $vehicle
     * @return \Illuminate\Http\Response
     */
    public function edit(Vehicle $vehicle)
    {

        return Inertia::render('Vehicles/Edit', [
            'vehicle' => $vehicle
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Vehicle  $vehicle
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Vehicle $vehicle)
    {

        $validated = $request->validate([
            'name' => "required|string|max:100|unique:vehicles,name,{$vehicle->id}",
            'description' => 'nullable|string|max:500',
        ]);

        $vehicle->update($validated);


        return $request->wantsJson()
            ? new JsonResponse('', 200)
            : back()->with('status', 'Updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Vehicle  $vehicle
     * @return \Illuminate\Http\Response
     */
    public function destroy(Vehicle $vehicle)
    { {
            if ($vehicle->delete()) {
                session()->flash('flash.banner', 'Deleted successfullly.');
                session()->flash('flash.bannerStyle', 'success');

                return back()->with('status', 'Deleted successfully.');
            }
        }
    }
}