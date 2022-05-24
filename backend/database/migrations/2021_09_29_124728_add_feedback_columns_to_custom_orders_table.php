<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddFeedbackColumnsToCustomOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('custom_orders', function (Blueprint $table) {
            $table->text('feedback')->nullable()->after('customer_grand_total');
            $table->bigInteger('product_id')->unsigned()->nullable()->after('feedback');
            $table->foreign('product_id')->references('id')->on('products');
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
            $table->dropColumn('feedback');
            $table->dropForeign('custom_orders_product_id_foreign');
            $table->dropColumn('product_id');
        });
    }
}