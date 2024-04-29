import { DatePipe, NgIf, NgStyle } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ITask } from 'src/app/core/models/task.model';
import { PriorityInfoPipe } from 'src/app/shared/pipes/priority-info.pipe';
import { StatusInfoPipe } from 'src/app/shared/pipes/status-info.pipe';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [StatusInfoPipe, NgIf, MatIconModule, NgStyle, PriorityInfoPipe, DatePipe],
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
