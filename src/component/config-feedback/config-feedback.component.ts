import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-config-feedback',
  imports: [CommonModule],
  templateUrl: './config-feedback.component.html',
  styleUrl: './config-feedback.component.sass'
})
export class ConfigFeedbackComponent {

  @Input() config!: {playerName: string, timer: number};
}
