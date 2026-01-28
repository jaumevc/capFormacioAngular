import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path: 'dashboard',
        //perque es carregui de manera lazy. Nomes es carregara quan s'accedeixi a aquesta ruta.
        loadComponent: () => import('./gifs/pages/dashboard-page/dashboard-page')
    },

    {
        path: '**',
        redirectTo: 'dashboard'
    }



];
