<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddFeedbackColumnToPreviewDesigns extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('preview_designs', function (Blueprint $table) {
            $table->text('feedback')->nullable()->after('customer_grand_total');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('preview_designs', function (Blueprint $table) {
            $table->dropColumn('feedback');
        });
    }
}