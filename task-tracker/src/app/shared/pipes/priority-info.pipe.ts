import { Pipe, type PipeTransform } from '@angular/core';
import { ITaskPriority } from 'src/app/core/models/priority.model';

enum PriorityColor {
  LOW = 'rgb(34, 211, 238)',
  MEDIUM = 'rgb(163, 230, 53)',
  HIGH = 'rgb(225, 29, 72)',
}

enum PriorityIcon {
  LOW = 'stat_minus_2',
  MEDIUM = 'remove',
  HIGH = 'stat_2',
}

@Pipe({
  name: 'priorityInfo',
  standalone: true,
})
export class PriorityInfoPipe implements PipeTransform {
  private priorities: { [key: string]: ITaskPriority } = {
    low: { icon: PriorityIcon.LOW, text: 'Low', color: PriorityColor.LOW },
    medium: { icon: PriorityIcon.MEDIUM, text: 'Medium', color: PriorityColor.MEDIUM },
    high: { icon: PriorityIcon.HIGH, text: 'High', color: PriorityColor.HIGH },
  };

  transform(priority: string | null): ITaskPriority {
    return priority ? this.priorities[priority] : { icon: '', text: '', color: '' };
  }
}
