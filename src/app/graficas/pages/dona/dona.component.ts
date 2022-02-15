import { Component } from '@angular/core';
import { ChartData, ChartType, Color } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [],
})
export class DonaComponent {
  // Doughnut
  public doughnutChartLabels: string[] = [
    'Download Sales',
    'In-Store Sales',
    'Mail-Order Sales',
  ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [350, 450, 100],backgroundColor: '#F7464A'},
      { data: [50, 150, 120] ,backgroundColor: '#46BFBD'},
      { data: [250, 130, 70] ,backgroundColor: '#FDB45C'},
    ],
  };
  public doughnutChartType: ChartType = 'doughnut';


  constructor() {}
}
