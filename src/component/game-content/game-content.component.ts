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

}
