import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: '/tasks' },
  {
    path: 'tasks',
    loadChildren: () => import('./pages/tasks/tasks.routes').then((r) => r.tasksRoutes),
  },
];
