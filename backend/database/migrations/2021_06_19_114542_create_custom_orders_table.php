<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCustomOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('custom_orders', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('customer_id')->unsigned();
            $table->string('vehicle_manufacturer')->nullable();
            $table->string('vehicle_model')->nullable();
            $table->string('bodywork')->nullable();
            $table->string('vehicle_manufacture_year')->nullable();
            $table->string('vehicle_color')->nullable();
            $table->string('vehicle_note')->nullable();
            $table->boolean('not_conditioned');
            $table->string('design_note')->nullable();
            $table->bigInteger('category_id')->unsigned()->nullable();
            $table->double('range_from')->default(0);
            $table->double('range_to')->default(0);
            $table->double('deposit_amount')->default(0);
            $table->timestamps();
            $table->foreign('category_id')->references('id')->on('categories');
            $table->foreign('customer_id')->references('id')->on('customers');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('custom_orders');
    }
}
