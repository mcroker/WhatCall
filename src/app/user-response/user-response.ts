import { Component, EventEmitter, Input, Output } from '@angular/core';

export enum ResponseType {
  full = 'full',
  oneTeam = 'oneTeam',
}

/**
 * Component to display user response options.
 * @category Components
 */
@Component({
  selector: 'app-user-response',
  imports: [],
  templateUrl: './user-response.html',
  styleUrl: './user-response.scss',
})
export class UserResponse {

  /**
   * Type of response options to display.
   * @default ResponseType.full
   */
  @Input() responseType: ResponseType = ResponseType.full;

  @Input() visible: boolean = true;

  /**
   * Event emitted when a response option is selected.
   * @type {EventEmitter<string>}
   * @memberof UserResponse
   * @example
   * this.selection.subscribe((response: string) => {
   *   console.log('User selected response:', response);
   * });
   */
  @Output() selection: EventEmitter<string> = new EventEmitter();

  get buttons(): string[] {
    switch (this.responseType) {
      case ResponseType.full:
        return ['RC1', 'YC1', 'PK1', '-', 'PK2', 'YC2', 'RC2'];
      case ResponseType.oneTeam:
        return ['RC1', 'YC1', 'PK1', '-'];
      default:
        return [];
    }
  }

  sendResponse(t: string): void {
    this.selection.emit(t);
  }

}
