import { AsyncPipe, NgFor } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { Subscription } from 'rxjs';
import { ITask } from 'src/app/core/models/task.model';
import { TaskService } from 'src/app/core/services/task.service';
import { CreateComponent } from '../create/create.component';
import { ItemComponent } from './item/item.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ItemComponent, NgFor, MatIconModule, MatMenuModule, MatButtonModule, AsyncPipe],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent implements OnInit, OnDestroy {
  tasks!: ITask[];
  originalTasks!: ITask[];
  filterStatus: string = 'reset';

  sortOrder: { [key: string]: 'asc' | 'desc' } = {
    reporter: 'asc',
    date: 'asc',
    status: 'asc',
    priority: 'asc',
  };
  currentSortField: string | null = null;

  private tasksSubscription: Subscription | undefined;

  constructor(
    private taskService: TaskService,
    private cdr: ChangeDetectorRef,
    private dialog: MatDialog,
  ) {}

  ngOnInit() {
    this.tasksSubscription = this.taskService.tasks$.subscribe((tasks) => {
      this.tasks = tasks;
      this.originalTasks = [...this.tasks];

      this.cdr.markForCheck();
    });
  }

  ngOnDestroy(): void {
    if (this.tasksSubscription) {
      this.tasksSubscription.unsubscribe();
    }
  }

  sortTasksBy(field: string): void {
    this.toggleSortOrder(field);

    this.tasks.sort((a, b) => {
      let valueA, valueB;

      switch (field) {
        case 'date':
          valueA = new Date(a.deadline).getTime();
          valueB = new Date(b.deadline).getTime();
          break;
        case 'reporter':
          valueA = a.reporter.split(' ')[0].toLowerCase();
          valueB = b.reporter.split(' ')[0].toLowerCase();
          break;
        case 'status':
          const statusOrder = ['to_do', 'in_progress', 'done'];
          valueA = statusOrder.indexOf(a.status);
          valueB = statusOrder.indexOf(b.status);
          break;
        case 'priority':
          const priorityOrder = ['low', 'medium', 'high'];
          valueA = priorityOrder.indexOf(a.priority);
          valueB = priorityOrder.indexOf(b.priority);
          break;
        default:
          return 0;
      }

      return this.sortOrder[field] === 'asc'
        ? valueA < valueB
          ? -1
          : valueA > valueB
            ? 1
            : 0
        : valueB < valueA
          ? -1
          : valueB > valueA
            ? 1
            : 0;
    });
  }

  toggleSortOrder(field: string): void {
    this.sortOrder[field] = this.sortOrder[field] === 'asc' ? 'desc' : 'asc';
    this.currentSortField = field;
  }

  filterTasks(status: string): void {
    this.filterStatus = status;
    if (status === 'done') {
      this.tasks = this.originalTasks.filter((task) => task.status === 'done');
    } else if (status === 'undone') {
      this.tasks = this.originalTasks.filter((task) => task.status !== 'done');
    } else if (status === 'reset') {
      this.tasks = this.originalTasks;
    }
  }

  onDelete(id: string): void {
    this.taskService.deleteTaskById(id);
  }

  onEdit(task: ITask): void {
    this.dialog.open(CreateComponent, {
      data: task,
    });
  }

  onComplete(task: ITask): void {
    if (task.status === 'done') {
      this.taskService.updateTaskStatus(task.id, 'to_do');
    } else {
      this.taskService.updateTaskStatus(task.id, 'done');
    }
  }
}
