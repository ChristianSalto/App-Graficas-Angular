import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [],
})
export class DonaHttpComponent implements OnInit {
  public doughnutChartData: ChartData<'doughnut'> = {
    // labels: ["ddddddddddd","dddddddd","ddddddd"],
    datasets: [
      {
        data: [],
        backgroundColor: ['#F7464A', '#b9464A', '#A7464G'],
      },
    ],
  };
  public doughnutChartType: ChartType = 'doughnut';

  constructor(private graficasService: GraficasService) {}

  ngOnInit(): void {
    // this.graficasService.getDataRedesSocial().subscribe((datos) => {
    //   const labels = Object.keys(datos);
    //   const values: any = Object.values(datos);

    //   const { data } = this.doughnutChartData.datasets[0];

    //   this.doughnutChartData.labels = labels;
    //   data.push(values);

    // });

    this.graficasService
      .getDataRedesSocialDestructuring()
      .subscribe(({ labels, values }) => {
        ;

        this.doughnutChartData.labels = labels;
        this.doughnutChartData.datasets[0].data = values;

        console.log(values)
      });
  }
}
