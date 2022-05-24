<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('category_id')->unsigned();
            $table->bigInteger('color_id')->unsigned()->nullable();
            $table->string('name')->index('product_name_index');
            $table->string('sku')->index('sku_name_index');
            $table->double('price')->default(0);
            $table->text('description')->nullable();
            $table->text('note')->nullable();
            $table->string('print_data_format')->nullable();
            $table->string('recommended_material')->nullable();
            $table->foreign('category_id')->references('id')->on('categories');
            $table->foreign('color_id')->references('id')->on('colors');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
}
