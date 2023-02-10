import { Route } from '@angular/router';

export const routes: Route[] = [
  {
    path: 'react-component',
    loadComponent: () =>
      import('./todos-page.component').then((m) => m.TodosPageComponent),
  },
  {
    path: 'react-component-lazy',
    loadComponent: () =>
      import('./todos-page-lazy.component').then(
        (m) => m.TodosPageLazyComponent
      ),
  },
  {
    path: 'react-app',
    loadComponent: () =>
      import('./react-app/hello.component').then((m) => m.HelloComponent),
  },
  {
    path: '',
    redirectTo: '/react-component',
    pathMatch: 'full',
  },
];
