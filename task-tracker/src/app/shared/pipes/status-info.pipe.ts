import { Pipe, type PipeTransform } from '@angular/core';
import { ITaskStatus } from 'src/app/core/models/status.model';

enum StatusColor {
  TODO = 'rgb(59, 130, 246)',
  IN_PROGRESS = 'rgb(251, 191, 36, 0.8)',
  DONE = 'rgb(34, 197, 94)',
}

enum StatusIcon {
  TODO = 'do_not_disturb_on',
  IN_PROGRESS = 'arrow_circle_right',
  DONE = 'check_circle',
}

@Pipe({
  name: 'statusInfo',
  standalone: true,
})
export class StatusInfoPipe implements PipeTransform {
  private statuses: { [key: string]: ITaskStatus } = {
    to_do: { icon: StatusIcon.TODO, text: 'To do', color: StatusColor.TODO },
    in_progress: { icon: StatusIcon.IN_PROGRESS, text: 'In progress', color: StatusColor.IN_PROGRESS },
    done: { icon: StatusIcon.DONE, text: 'Done', color: StatusColor.DONE },
  };

  transform(status: string | null): ITaskStatus {
    return status ? this.statuses[status] : { icon: '', text: '', color: '' };
  }
}
