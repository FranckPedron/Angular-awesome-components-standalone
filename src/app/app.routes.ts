import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: 'social-media',
    loadChildren: () => import('./social-media/social-media-routes')
  },
  {
    path: 'complex-form',
    loadChildren: () => import('./complexForm/complex-form-routes')
  },
  {
    path: 'reactive-state',
    loadChildren: () => import('./reactive-state/reactive-state-routes')
  },
  {
    path: '**',
    redirectTo: 'social-media'
  }
];
