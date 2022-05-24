<?php

namespace App\Http\Controllers;

use App\Models\VehicleModel;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

class VehicleModelController extends Controller
{


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'vehicleId' => 'required',
            'name' => ['required', 'string', 'max:100',  Rule::unique('vehicle_models', 'name')->where('vehicle_id', $request->vehicleId)],
            'description' => 'nullable|string|max:500',
        ]);

        VehicleModel::create($validated);

        session()->flash('flash.banner', 'Model Created successfullly.');
        session()->flash('flash.bannerStyle', 'success');

        return redirect()->route('vehicles.show', $request->vehicleId);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\VehicleModel  $vehicleModel
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, VehicleModel $vehicleModel)
    {
        $request->validate([
            'name' => ['required', 'string', 'max:100', Rule::unique('vehicle_models', 'name')->where('vehicle_id', $request->vehicleId)->ignore($vehicleModel->id)],
            'description' => 'nullable|string|max:500',

        ]);

        DB::transaction(function () use ($vehicleModel, $request) {
            $vehicleModel->update([
                'name'        => $request->name,
                'description' => $request->description,
            ]);
        });

        session()->flash('flash.banner', 'Updated successfullly.');
        session()->flash('flash.bannerStyle', 'success');
        return back()->with('status', 'Updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\VehicleModel  $vehicleModel
     * @return \Illuminate\Http\Response
     */
    public function destroy(VehicleModel $vehicleModel)
    {
        if ($vehicleModel->customOrders()->exists()) {
            $customOrders = $vehicleModel->customOrders()->count();
            session()->flash('flash.banner', "There are {$customOrders} custom orders related to it. You can not delete it now.");
            session()->flash('flash.bannerStyle', 'danger');
            return;
        }
        if ($vehicleModel->previewDesigns()->exists()) {
            $previewDesigns = $vehicleModel->previewDesigns()->count();
            session()->flash('flash.banner', "There are {$previewDesigns} preview design request related to it. You can not delete it now.");
            session()->flash('flash.bannerStyle', 'danger');
            return;
        }

        if ($vehicleModel->delete()) {
            session()->flash('flash.banner', 'Deleted successfullly.');
            session()->flash('flash.bannerStyle', 'success');
            return back()->with('status', 'Deleted Successfully');
        }
    }
}