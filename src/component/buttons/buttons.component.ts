import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowsRotate, faCheck, faEraser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-buttons',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.sass']
})
export class ButtonsComponent {
  @Output() execute = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();
  @Output() restart = new EventEmitter<void>();

  faCheck = faCheck;
  faEraser = faEraser;
  faArrowsRotate = faArrowsRotate;
}
