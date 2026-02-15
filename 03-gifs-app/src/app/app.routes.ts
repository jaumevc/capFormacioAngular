import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path: 'dashboard',
        //perque es carregui de manera lazy. Nomes es carregara quan s'accedeixi a aquesta ruta.
        loadComponent: () => import('./gifs/pages/dashboard-page/dashboard-page'),

        children: [
            {
                path: 'trending',
                //perque es carregui de manera lazy. Nomes es carregara quan s'accedeixi a aquesta ruta.
                loadComponent: () => import('./gifs/pages/trending-page/trending-page')
            },
            {
                path: 'search',
                //perque es carregui de manera lazy. Nomes es carregara quan s'accedeixi a aquesta ruta.
                loadComponent: () => import('./gifs/pages/search-page/search-page')
            },
            {
                path: 'history/:term',
                //perque es carregui de manera lazy. Nomes es carregara quan s'accedeixi a aquesta ruta.
                loadComponent: () => import('./gifs/pages/gif-history/gif-history')
            },
            {
                path: '**',
                redirectTo: 'trending'
            }
        ]
    },

    {
        path: '**',
        redirectTo: 'dashboard'
    }
];
