<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddColumnsToCustomOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('custom_orders', function (Blueprint $table) {
            $table->double('customer_amount')->default(0)->after('deposit_amount');
            $table->string('customer_currency')->default('EUR')->after('customer_amount');
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
            $table->dropColumn('customer_amount');
            $table->dropColumn('customer_currency');
            $table->rename('deposit_amount', 'deposite_amount');
        });
    }
}
