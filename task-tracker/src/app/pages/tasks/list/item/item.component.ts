import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ITask } from 'src/app/core/models/task.model';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemComponent {
  @Input({ required: true }) task: ITask | null;

  constructor() {
    this.task = null;
  }
}
