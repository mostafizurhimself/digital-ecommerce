<!DOCTYPE html>
<html lang="en">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Invoice</title>
</head>
<style>
    body {
        font-family: sans-serif;
        font-size: 12px;
    }

    #invoice-container {
        min-height: 100vh;
        max-width: 800px;
        margin: auto;
    }

    .header .logo {
        float: left;
    }

    .header .logo img {
        height: 60px;
    }

    .header .invoice {
        float: right;
        text-align: right;
    }

    .clearfix {
        clear: both
    }

    .info {
        display: flex;
        justify-content: space-between;
        padding-top: 20px;
    }

    .info .company {}

    .info .customer {
        text-align: right
    }

    .invoice-content {
        margin-top: 10px
    }

    table {
        width: 100%;
        border-collapse: collapse;
    }

    table,
    td,
    th {
        border: 0.5px solid #dadada;
    }

    td,
    th {
        padding: 10px;
        text-align: left
    }

    tfoot tr {
        font-weight: bold;
    }

    .footer {
        text-align: center;
        margin-top: 10px;
        color: #9e9e9e
    }

</style>

<body>
    <main id="invoice-container">
        @yield('content')
    </main>
</body>

</html>
