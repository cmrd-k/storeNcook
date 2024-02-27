import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'view-recipes',
    loadComponent: () => import('./pages/view-recipes/view-recipes.page').then( m => m.ViewRecipesPage)
  },
];
