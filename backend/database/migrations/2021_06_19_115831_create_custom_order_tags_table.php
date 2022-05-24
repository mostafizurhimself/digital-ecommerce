<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCustomOrderTagsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('custom_order_tags', function (Blueprint $table) {
            $table->bigInteger('custom_order_id')->unsigned();
            $table->bigInteger('tag_id')->unsigned();
            $table->foreign('custom_order_id')->references('id')->on('custom_orders');
            $table->foreign('tag_id')->references('id')->on('tags');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('custom_order_tags', function (Blueprint $table) {
            //
        });
    }
}
