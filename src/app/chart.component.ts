import { Component, OnInit, Input } from '@angular/core';
import { IChart } from "./interface/IChart";
import { ChartOptions } from "./interface/ChartOptions";

@Component({
    selector: 'chart',
    template: `{{options.type}}`,
    styles: [`
     .chart rect {
        fill: steelblue;
     }
    .chart text {
        fill: white;
        font: 10px sans-serif;
        text-anchor: middle;
    }
`]
})

export class ChartComponent implements IChart {

    @Input() options: ChartOptions;


    constructor() {

    }
}
