import { DatePipe, NgClass, NgIf, NgStyle } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';
import { ITask } from 'src/app/core/models/task.model';
import { PriorityInfoPipe } from 'src/app/shared/pipes/priority-info.pipe';
import { StatusInfoPipe } from 'src/app/shared/pipes/status-info.pipe';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [
    DatePipe,
    MatIconModule,
    MatTooltipModule,
    NgClass,
    NgIf,
    NgStyle,
    PriorityInfoPipe,
    RouterLink,
    StatusInfoPipe,
  ],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemComponent {
  @Input({ required: true }) task: ITask | null;
  @Output() deleteClicked: EventEmitter<string> = new EventEmitter<string>();
  @Output() editClicked: EventEmitter<ITask> = new EventEmitter<ITask>();
  @Output() completeClicked: EventEmitter<ITask> = new EventEmitter<ITask>();

  constructor() {
    this.task = null;
  }

  getOverdue(deadline: string): Boolean {
    const deadlineDate = new Date(deadline);
    const currentDate = new Date();

    return deadlineDate < currentDate;
  }

  onDeleteClick(id: string): void {
    this.deleteClicked.emit(id);
  }

  onEditClick(task: ITask): void {
    this.editClicked.emit(task);
  }

  onCompleteClick(task: ITask) {
    this.completeClicked.emit(task); 
  }
}
