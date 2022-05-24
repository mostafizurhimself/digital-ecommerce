<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCustomOrderColorsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('custom_order_colors', function (Blueprint $table) {
            $table->bigInteger('custom_order_id')->unsigned();
            $table->bigInteger('color_id')->unsigned();
            $table->foreign('custom_order_id')->references('id')->on('custom_orders');
            $table->foreign('color_id')->references('id')->on('colors');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('custom_order_colors', function (Blueprint $table) {
            //
        });
    }
}
