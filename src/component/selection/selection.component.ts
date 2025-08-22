import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-selection',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.sass', '../../styles.scss']
})
export class SelectionComponent {
  @Input() selectedNumber1: number | null = null;
  @Input() selectedNumber2: number | null = null;
  @Input() operation: string | null = null;
  @Input() result: number | null = null;
}
