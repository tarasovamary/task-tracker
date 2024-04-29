import { DatePipe, NgClass, NgStyle } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject, filter, switchMap, takeUntil } from 'rxjs';
import { ITask } from 'src/app/core/models/task.model';
import { mockTasks } from 'src/app/mock/data';
import { PriorityInfoPipe } from 'src/app/shared/pipes/priority-info.pipe';
import { StatusInfoPipe } from 'src/app/shared/pipes/status-info.pipe';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [DatePipe, StatusInfoPipe, PriorityInfoPipe, MatIconModule, NgStyle, NgClass],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailsComponent implements OnInit {
  task!: ITask | null;
  routeId$!: Observable<string>;

  private unsubscribeAll: Subject<any> = new Subject<any>();

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.routeId$ = this.activatedRoute.paramMap.pipe(switchMap((params) => params.getAll('id')));

    this.routeId$
      .pipe(
        takeUntil(this.unsubscribeAll),
        filter((id) => !!id),
      )
      .subscribe((id) => {
        this.getTaskById(id);
      });
  }

  getTaskById(id: string): void {
    if (!id) {
      return;
    }
    const task = mockTasks.find((task) => task.id === id);
    this.task = task || null;
  }

  getOverdue(deadline: string): Boolean {
    const deadlineDate = new Date(deadline);
    const currentDate = new Date();

    return deadlineDate < currentDate;
  }

  ngOnDestroy(): void {
    this.unsubscribeAll.next(null);
    this.unsubscribeAll.complete();
  }
}
