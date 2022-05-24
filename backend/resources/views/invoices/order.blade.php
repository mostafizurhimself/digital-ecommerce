@extends('layouts.invoice')

@section('content')
    <div class="header">
        <div class="logo">
            <img src="{{ \App\Facades\Helper::getDarkLogo() }}">
        </div>
        <h3 class="invoice">
            Invoice No # {{ $order->id }}
        </h3>
    </div>
    <div class="clearfix"></div>
    <div class="info">
        <div class="company">
            <span>{{ \App\Facades\Helper::getAppName() }}</span>
            <br>
            <span>{{ \App\Facades\Helper::getAppEmail() }}</span>
            <br>
            <span>
                {{ \App\Facades\Helper::getStreet() }},
                {{ \App\Facades\Helper::getCity() }} -
                {{ \App\Facades\Helper::getZipcode() }},
                {{ \App\Facades\Helper::getCountry() }}
            </span>
        </div>
        <div class="customer">
            <span>{{ $order->customer->name }}</span>
            <br>
            <span>{{ $order->customer->email }}</span>
            <br>
            <span>
                {{ $order->customer->billingAddress['street'] }},
                {{ $order->customer->billingAddress['city'] }}-
                {{ $order->customer->billingAddress['zipcode'] }},
                {{ $order->customer->billingAddress['country'] }}
            </span>

        </div>

    </div>

    <div class="invoice-content">
        <table>
            <tbody>
                <tr>
                    <th width="20px">#</th>
                    <th>Name</th>
                    <th width="50%">Description</th>
                    <th style="text-align: right">Amount</th>
                </tr>
                @foreach ($order->orderItems as $item)
                    <tr>
                        <td>{{ $loop->iteration }}</td>
                        <td>{{ $item->product->name }}</td>
                        <td>{{ $item->product->description }}</td>
                        <td style="text-align: right">{{ $item->customerAmountFormatted }}</td>
                    </tr>
                @endforeach
            </tbody>
            <tfoot>
                <tr>
                    <td colspan="3" style="text-align: right">SubTotal</td>
                    <td style="text-align: right">{{ $order->customerAmountFormatted }}</td>
                </tr>
                <tr>
                    <td colspan="3" style="text-align: right">VAT</td>
                    <td style="text-align: right">{{ $order->customerVatAmountFormatted }}</td>
                </tr>
                <tr>
                    <td colspan="3" style="text-align: right">Grand Total</td>
                    <td style="text-align: right">{{ $order->customerGrandTotalFormatted }}</td>
                </tr>
            </tfoot>
        </table>
    </div>
    <div class="footer">
        Thank for your order.
    </div>
@endsection
