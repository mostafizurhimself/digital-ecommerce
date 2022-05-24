<?php

namespace App\Exports;

use App\Models\ColorChange;
use Maatwebsite\Excel\Concerns\FromQuery;
use PhpOffice\PhpSpreadsheet\Shared\Date;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\WithStyles;
use Maatwebsite\Excel\Concerns\WithMapping;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use PhpOffice\PhpSpreadsheet\Style\NumberFormat;
use PhpOffice\PhpSpreadsheet\Worksheet\Worksheet;
use Maatwebsite\Excel\Concerns\WithColumnFormatting;

class ColorChangesExport implements FromQuery, WithMapping, WithHeadings, ShouldAutoSize, WithStyles, WithColumnFormatting
{
    use Exportable;

    public function __construct($filter)
    {
        $this->filter = $filter;
    }

    public function query()
    {
        return ColorChange::query()->filter($this->filter)->orderBy('id', 'desc');
    }

    public function headings(): array
    {
        return [
            'ID',
            'Date',
            'Customer Name',
            'Grand Total',
            'Customer Currency',
            'Customer Grand Total',
        ];
    }

    public function map($colorChange): array
    {
        return [
            $colorChange->id,
            Date::dateTimeToExcel($colorChange->createdAt),
            $colorChange->customer->name,
            $colorChange->grandTotal,
            $colorChange->customerGrandTotal,
            $colorChange->customerCurrency,
        ];
    }

    public function styles(Worksheet $sheet)
    {
        $sheet->getStyle('1')->getFont()->setBold(true);
        $sheet->getStyle('A1:' . $sheet->getHighestDataColumn() . $sheet->getHighestDataRow())->applyFromArray([
            'borders' => [
                'allBorders' => [
                    'borderStyle' => \PhpOffice\PhpSpreadsheet\Style\Border::BORDER_THIN,
                    'color' => ['argb' => '000000'],
                ],
            ],
        ]);
    }

    public function columnFormats(): array
    {
        return [
            'B' => NumberFormat::FORMAT_DATE_DDMMYYYY,
            'D' => NumberFormat::FORMAT_NUMBER,
            'E' => NumberFormat::FORMAT_NUMBER,
        ];
    }
}