import { Component } from '@angular/core';
import { ConfigFeedbackComponent } from "../config-feedback/config-feedback.component";
import { SelectionComponent } from "../selection/selection.component";
import { ButtonsComponent } from "../buttons/buttons.component";

@Component({
  selector: 'app-game-content',
  imports: [ConfigFeedbackComponent, SelectionComponent, ButtonsComponent],
  templateUrl: './game-content.component.html',
  styleUrl: './game-content.component.sass'
})
export class GameContentComponent {
  config = {
    playerName: 'Daniel',
    timer: 60
  };


  selectedNumber1: number | null = 5;
  selectedNumber2: number | null = 3;
  operation: string | null = '+';
  result: number | null = 8;

  onExecute() {
    if (this.selectedNumber1 !== null && this.selectedNumber2 !== null && this.operation) {
      switch (this.operation) {
        case '+':
          this.result = this.selectedNumber1 + this.selectedNumber2;
          break;
        case '-':
          this.result = this.selectedNumber1 - this.selectedNumber2;
          break;
        case '*':
          this.result = this.selectedNumber1 * this.selectedNumber2;
          break;
        case '/':
          this.result = this.selectedNumber2 !== 0 ? this.selectedNumber1 / this.selectedNumber2 : null;
          break;
        case '^':
          this.result = this.selectedNumber1 ** this.selectedNumber2;
      }
    }
  }

  onCancel() {
    this.selectedNumber1 = null;
    this.selectedNumber2 = null;
    this.operation = null;
    this.result = null;
  }

  onRestart() {
    this.onCancel();
  }

}
