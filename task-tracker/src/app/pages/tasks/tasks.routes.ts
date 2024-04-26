import { Route } from '@angular/router';
import { ListComponent } from './list/list.component';

export const tasksRoutes: Route[] = [
  {
    path: '',
    component: ListComponent,
  },
];
