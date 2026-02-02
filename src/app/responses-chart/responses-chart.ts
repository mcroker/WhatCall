import { Component, Input } from '@angular/core';
import { ChartConfiguration, ChartData } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-responses-chart',
  imports: [BaseChartDirective],
  templateUrl: './responses-chart.html',
  styleUrl: './responses-chart.scss',
})
export class ResponsesChartComponent {

  @Input() userResponse: string = '';

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {
        min: 10,
      },
      y: {
      },
    },
    indexAxis: 'y',
    plugins: {
      legend: {
        display: true,
      },
    },
  };
  public barChartType = 'bar' as const;

  public barChartData: ChartData<'bar'> = {
    labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
    datasets: [
      { data: [65, 59, 80, 81, 56, 55, 40], label: 'Everybody' },
      { data: [28, 48, 40, 19, 86, 27, 90], label: 'Referees' },
    ],
  };

}
