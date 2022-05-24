<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddVehicleColumnsToCustomOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('custom_orders', function (Blueprint $table) {
            $table->dropColumn('vehicle_manufacturer');
            $table->dropColumn('vehicle_model');
            $table->bigInteger('vehicle_id')->unsigned()->nullable()->after('bodywork');
            $table->bigInteger('vehicle_model_id')->unsigned()->nullable()->after('vehicle_id');
            $table->foreign('vehicle_id')->references('id')->on('vehicles');
            $table->foreign('vehicle_model_id')->references('id')->on('vehicle_models');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('custom_orders', function (Blueprint $table) {
            $table->string('vehicle_manufacturer')->nullable()->after('bodywork');
            $table->string('vehicle_model')->nullable()->after('vehicle_manufacturer');
            $table->dropForeign('custom_orders_vehicle_id_foreign');
            $table->dropForeign('custom_orders_vehicle_model_id_foreign');
            $table->dropColumn('vehicle_id');
            $table->dropColumn('vehicle_model_id');
        });
    }
}
