import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthenticationModule } from './authentication/authentication.module';
import { PageNotFoundComponent } from './core/components';
import { SystemModule } from './system/system.module';


const routes: Routes = [
  {
    path: 'sign-in',
    loadChildren: () => AuthenticationModule,
    data: {preload: true, delay: false, name: 'sign-in'}
  },
  {
    path: '',
    loadChildren: () => SystemModule,
    data: {preload: true, delay: false, name: ''}
  },

  {path: 'not-found', component: PageNotFoundComponent},
  {path: '**', redirectTo: 'not-found'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
