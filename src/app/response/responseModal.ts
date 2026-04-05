import { Injectable } from '@angular/core';
import {
  MatDialog,
  MatDialogRef
} from '@angular/material/dialog';
import { ScenarioWithResponses } from '../../services';
import { ResponseComponent } from './response';

@Injectable({
  providedIn: 'root',
})
export class ResponseModalService {

  constructor(
    private dialog: MatDialog
  ) {
  }

  /**
 * Launches the upload modal.
 * Handles a lazy load of the UploadCompoent
 */
  async launch(scenarioId: string): Promise<MatDialogRef<ResponseComponent>> {
    const ResponseComponent = await import('./response').then(m => m.ResponseComponent)
    console.log('Launching response modal');
    return this.dialog.open(ResponseComponent, {
      height: '400px',
      width: '600px',
      data: {
        scenarioId
      }
    });
  }

}
