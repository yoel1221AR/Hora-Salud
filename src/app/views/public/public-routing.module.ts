import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbLoginAbssaViewComponent } from './views/login/ab-login/ab-login-abssa-view/ab-login-abssa-view.component';
import { AbLoginViewComponent } from './views/login/ab-login/ab-login-view/ab-login-view.component';

const routes: Routes = [
  {
    path: 'ab-login-abssa',
    component: AbLoginAbssaViewComponent,
  },
  {
    path: 'ab-login',
    component: AbLoginViewComponent,
  },
  {
    path: '',
    redirectTo: '/public/ab-login', // Ruta por defecto
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicRoutingModule {}
