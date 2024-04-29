import { NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ITask } from 'src/app/core/models/task.model';
import { mockTasks } from 'src/app/mock/data';
import { ItemComponent } from './item/item.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ItemComponent, NgFor],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent {
  tasks: ITask[] = mockTasks;
}
