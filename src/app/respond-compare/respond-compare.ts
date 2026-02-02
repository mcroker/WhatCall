import { Component, Input } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ResponsesChartComponent } from '../responses-chart/responses-chart';

@Component({
  selector: 'app-respond-compare',
  imports: [BaseChartDirective, ResponsesChartComponent],
  templateUrl: './respond-compare.html',
  styleUrl: './respond-compare.scss',
})
export class RespondCompareComponent {

  @Input() userResponse: string = '';

}
