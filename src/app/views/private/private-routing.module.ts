import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivateComponent } from './private.component';
import { AbDashboardComponent } from './views/ab-dashboard/ab-dashboard.component';
import { FsSideNavComponent } from './components/fs-side-nav/fs-side-nav.component';
import { AbRRHHTipoasisComponent as AbRRHHTipoasisComponent } from './views/ab-planhr-config-tipoasistencia/ab-rrhh-config-tipoasistencia.component';
import { FsHeaderComponent } from './components/fs-header/fs-header.component';
import { AbListAbmComponent } from './views/ab-list-abm/ab-list-abm.component';

const routes: Routes = [
  {
    path: '',
    component: FsHeaderComponent,
    children: [
      {
        path: '',  // Ruta secundaria
        component: AbDashboardComponent,  // Otro componente dentro de Private
      },
      {
        path: 'gs_RRHH_informeTipoAsis',  // Ruta secundaria
        component: AbRRHHTipoasisComponent,  // Otro componente dentro de Private
      },
      {
        path: 'gs_lista_abms',  // Ruta secundaria
        component: AbListAbmComponent,  // Otro componente dentro de Private
      },
      // Otras rutas pueden ser agregadas aquí
    ] // Componente principal para el módulo private
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivateRoutingModule {}
