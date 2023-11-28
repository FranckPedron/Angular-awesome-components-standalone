import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: 'social-media',
    loadChildren: () => import('./social-media/social-media-routes')
  },
  {
    path: '**',
    redirectTo: 'social-media'
  }
];
