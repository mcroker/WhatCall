import { Component, inject, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ResponsesChartComponent } from '../responses-chart/responses-chart';
import { ScenarioService, ScenarioWithResponses } from '../../services';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { UploadComponent } from '../upload/upload';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-response',
  imports: [ResponsesChartComponent, CommonModule, MatButtonModule],
  templateUrl: './response.html',
  styleUrl: './response.scss',
})
export class ResponseComponent {

  public scenario$: Observable<ScenarioWithResponses | undefined>;
  private readonly dialogRef = inject(MatDialogRef<UploadComponent>);

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private scenarioService: ScenarioService
  ) {
    this.scenario$ = this.scenarioService.getScenarioWithResponsesById$(data.scenarioId)
  }

  gotoNext() {
    this.dialogRef.close();
  }

}
