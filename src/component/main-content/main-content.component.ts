import { Component } from '@angular/core';
import { GameContentComponent } from '../game-content/game-content.component';
import { OperationsComponent } from "../operations/operations.component";

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [GameContentComponent, OperationsComponent],
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.sass']
})
export class MainContentComponent {

}
