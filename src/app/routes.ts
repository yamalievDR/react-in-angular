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
            import('./react-app/react-app-wrapper.component').then((m) => m.ReactAppWrapperComponent),
    },
    {
        path: 'child',
        loadComponent: () =>
            import('./angular-child-route/angular-child-route.component').then((m) => m.AngularChildRouteComponent),
    },
    {
        path: '',
        redirectTo: '/react-component',
        pathMatch: 'full',
    },
];
