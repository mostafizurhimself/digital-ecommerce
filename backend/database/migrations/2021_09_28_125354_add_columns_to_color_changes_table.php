<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddColumnsToColorChangesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('color_changes', function (Blueprint $table) {
            $table->string('product_name')->after('product_id')->nullable()->index('color_change_product_name_index');
            $table->string('product_sku')->after('product_name')->nullable()->index('color_change_product_sku_index');
            $table->text('product_description')->after('product_sku')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('color_changes', function (Blueprint $table) {
            $table->dropColumn('product_name');
            $table->dropColumn('product_sku');
            $table->dropColumn('product_description');
        });
    }
}