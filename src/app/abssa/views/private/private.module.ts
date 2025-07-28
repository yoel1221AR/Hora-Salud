import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { PrivateComponent } from './private.component';
import { AbDashboardComponent } from './views/ab-dashboard/ab-dashboard.component';
import { MatSortModule } from '@angular/material/sort';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { MatNativeDateModule } from '@angular/material/core';
import { SharedModule} from "../../../shared/shared.module";
import { CarouselModule } from 'primeng/carousel';
import { FsSideNavComponent } from './components/fs-side-nav/fs-side-nav.component';
import { FsHeaderMobileComponent } from './components/fs-header-mobile/fs-header-mobile.component';
import { FsHeaderComponent } from './components/fs-header/fs-header.component';
import { AbFilterComponent } from './components/ab-filter/ab-filter.component';
import { AbRRHHTipoasisComponent } from './views/ab-planhr-config-tipoasistencia/ab-rrhh-config-tipoasistencia.component';
import { AbListAbmComponent } from './views/ab-list-abm/ab-list-abm.component';



@NgModule({
  declarations: [
    PrivateComponent,
    AbDashboardComponent,FsSideNavComponent, FsHeaderMobileComponent, FsHeaderComponent, AbFilterComponent, AbRRHHTipoasisComponent, AbListAbmComponent
  ],
  imports: [
    CarouselModule, 
    CommonModule,
    PrivateRoutingModule,
    SharedModule,
    MatNativeDateModule,
    TranslateModule,
    MatSortModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule
]
})
export class PrivateModule { }
