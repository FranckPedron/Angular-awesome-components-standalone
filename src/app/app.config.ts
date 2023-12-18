import {provideRouter, Routes} from '@angular/router';
import {ApplicationConfig} from "@angular/core";
import {provideAnimations} from "@angular/platform-browser/animations";
import {provideHttpClient} from "@angular/common/http";

const routes: Routes = [
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

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideRouter(routes),
    provideHttpClient()
  ]
};
