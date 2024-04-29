import { Route } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { ListComponent } from './list/list.component';

export const tasksRoutes: Route[] = [
  {
    path: '',
    component: ListComponent,
  },
  {
    path: ':id',
    component: DetailsComponent,
  },
];
