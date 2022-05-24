<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Exports\OrdersExport;
use App\Exports\CustomersExport;
use App\Exports\ColorChangesExport;
use App\Exports\CustomOrdersExport;
use App\Http\Controllers\Controller;
use App\Exports\PreviewDesignsExport;

class ExcelDownloadController extends Controller
{
    /**
     * Excel download resource
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function customer(Request $request)
    {
        return (new CustomersExport($request->all()))->download('customers.xlsx');
    }

    /**
     * Excel download resource
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function order(Request $request)
    {
        return (new OrdersExport($request->all()))->download('orders.xlsx');
    }

    /**
     * Excel download resource
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function customOrder(Request $request)
    {
        return (new CustomOrdersExport($request->all()))->download('custom-orders.xlsx');
    }

    /**
     * Excel download resource
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function colorChange(Request $request)
    {
        return (new ColorChangesExport($request->all()))->download('color-changes.xlsx');
    }

    /**
     * Excel download resource
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function previewDesign(Request $request)
    {
        return (new PreviewDesignsExport($request->all()))->download('preview-designs.xlsx');
    }
}