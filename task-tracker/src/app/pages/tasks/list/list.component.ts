import { NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ITask } from 'src/app/core/models/task.model';
import { mockTasks } from 'src/app/mock/data';
import { ItemComponent } from './item/item.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ItemComponent, NgFor, MatIconModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent {
  tasks: ITask[] = mockTasks;
  reporterSortOrder!: 'asc' | 'desc';
  dateSortOrder!: 'asc' | 'desc';

  sortTasksByDate() {
    this.toggleSortOrder('date');

    this.tasks.sort((a, b) => {
      const dateA = new Date(a.deadline).getTime();
      const dateB = new Date(b.deadline).getTime();
      return this.dateSortOrder === 'asc' ? dateA - dateB : dateB - dateA;
    });
  }

  sortTasksByReporter() {
    this.toggleSortOrder('reporter');

    this.tasks.sort((a, b) => {
      const reporterA = a.reporter.toLowerCase();
      const reporterB = b.reporter.toLowerCase();
      if (reporterA < reporterB) {
        return this.reporterSortOrder === 'asc' ? -1 : 1;
      }
      if (reporterA > reporterB) {
        return this.reporterSortOrder === 'asc' ? 1 : -1;
      }
      return 0;
    });
  }

  toggleSortOrder(sortBy: 'date' | 'reporter' | 'status'): void {
    if (sortBy === 'date') {
      this.dateSortOrder = this.dateSortOrder === 'asc' ? 'desc' : 'asc';
    } else if (sortBy === 'reporter') {
      this.reporterSortOrder = this.reporterSortOrder === 'asc' ? 'desc' : 'asc';
    }
  }
}
