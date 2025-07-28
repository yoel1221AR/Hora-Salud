import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [{
  path: 'private',
  loadChildren: () =>
    import('./views/private/private.module').then(
      (m) => m.PrivateModule
    ),
},
{
  path: 'public',
  loadChildren: () =>
    import('./views/public/public.module').then(
      (m) => m.PublicModule
    ),
},
{
  path: '',
  redirectTo: 'public',
  pathMatch: 'full',
},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AbssaRoutingModule { }
