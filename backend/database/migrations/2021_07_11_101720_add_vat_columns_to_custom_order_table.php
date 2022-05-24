<?php

use App\Enums\CompleteStatus;
use App\Enums\VatType;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddVatColumnsToCustomOrderTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('custom_orders', function (Blueprint $table) {
            $table->double('vat')->default(0)->after('customer_currency');
            $table->string('vat_type')->default(VatType::PERCENTAGE())->after('vat');
            $table->double('vat_amount')->default(0)->after('vat_type');
            $table->double('customer_vat_amount')->default(0)->after('vat_amount');
            $table->double('grand_total')->default(0)->after('customer_vat_amount');
            $table->double('customer_grand_total')->default(0)->after('grand_total');
            $table->string('status')->default(CompleteStatus::PENDING())->after('customer_grand_total');
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
            $table->dropColumn('vat');
            $table->dropColumn('vat_type');
            $table->dropColumn('vat_amount');
            $table->dropColumn('customer_vat_amount');
            $table->dropColumn('grand_total');
            $table->dropColumn('customer_grand_total');
            $table->dropColumn('status');
        });
    }
}