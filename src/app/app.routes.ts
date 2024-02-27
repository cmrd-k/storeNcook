import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'view-recipe',
    loadComponent: () => import('./pages/view-recipe/view-recipe.page').then( m => m.ViewRecipePage)
  },
];
