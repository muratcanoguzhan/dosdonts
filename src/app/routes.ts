import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: 'first-component',
    loadComponent: () =>
      import('./pages/first/first.component').then((mod) => mod.FirstComponent),
  },
  {
    path: 'second-component',
    loadComponent: () =>
      import('./pages/second/second.component').then((m) => m.SecondComponent),
  },
];
