import { Component, EventEmitter, Input, Output } from '@angular/core';

export enum ResponseType {
  full = 'full',
  oneTeam = 'oneTeam',
}

@Component({
  selector: 'app-user-response',
  imports: [],
  templateUrl: './user-response.html',
  styleUrl: './user-response.scss',
})
export class UserResponse {

  @Input() responseType: ResponseType = ResponseType.full;

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
