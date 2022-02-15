import { Component } from '@angular/core';
import { ChartData, ChartDataset } from 'chart.js';

@Component({
  selector: 'app-barras-dobles',
  templateUrl: './barras-dobles.component.html',
  styles: [
  ]
})
export class BarrasDoblesComponent {

  proveedorData: ChartData<'bar'> = {
    labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
    datasets: [
      {
        data: [65, 59, 80, 81, 56, 55, 40],
        label: 'Series D',
        backgroundColor: 'red',
        hoverBackgroundColor: 'gray',
      },
      {
        data: [28, 48, 40, 19, 86, 27, 90],
        label: 'Series F',
        backgroundColor: 'orange',
        hoverBackgroundColor: 'gray',
      },
      {
        data: [58, 77, 10, 99, 81, 29, 80],
        label: 'Series G',
        backgroundColor: 'yellow',
        hoverBackgroundColor: 'gray',
      },
    ],
  };

  proveedorData2: ChartData<'bar'> = {
    labels: ['2016', '2017', '2018', '2019', '2020', '2021', '2022'],
    datasets: [
      {
        data: [65, 59, 80, 81, 56, 55, 40],
        label: 'Series D',
        backgroundColor: 'blue',
        hoverBackgroundColor: 'gray',
      },
      {
        data: [28, 48, 40, 19, 86, 27, 90],
        label: 'Series F',
        backgroundColor: 'black',
        hoverBackgroundColor: 'gray',
      },
      {
        data: [58, 77, 10, 99, 81, 29, 80],
        label: 'Series G',
        backgroundColor: 'purple',
        hoverBackgroundColor: 'gray',
      },
    ],
  };

  constructor() { }

}
