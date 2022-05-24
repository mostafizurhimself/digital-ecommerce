<?php

use App\Enums\VatType;
use App\Enums\CompleteStatus;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePreviewDesignsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('preview_designs', function (Blueprint $table) {
            $table->id();
            $table->date('date');
            $table->bigInteger('customer_id')->unsigned();
            $table->bigInteger('product_id')->unsigned();
            $table->bigInteger('vehicle_id')->unsigned();
            $table->bigInteger('vehicle_model_id')->unsigned()->nullable();
            $table->text('description')->nullable();
            $table->double('deposit_amount')->default(0);
            $table->double('customer_amount')->default(0);
            $table->string('customer_currency')->default('EUR');
            $table->double('vat')->default(0);
            $table->string('vat_type')->default(VatType::PERCENTAGE());
            $table->double('vat_amount')->default(0);
            $table->double('customer_vat_amount')->default(0);
            $table->double('grand_total')->default(0);
            $table->double('customer_grand_total');
            $table->string('status')->default(CompleteStatus::PENDING());
            $table->timestamps();
            $table->softDeletes();
            $table->foreign('customer_id')->references('id')->on('customers');
            $table->foreign('product_id')->references('id')->on('products');
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
        Schema::dropIfExists('preview_designs');
    }
}