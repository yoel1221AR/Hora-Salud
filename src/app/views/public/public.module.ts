import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { MatSortModule } from '@angular/material/sort';
import { MatNativeDateModule } from '@angular/material/core';
import { SharedModule } from 'primeng/api';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { AbLoginViewComponent } from './views/login/ab-login/ab-login-view/ab-login-view.component';
import { AbLoginAbssaViewComponent } from './views/login/ab-login/ab-login-abssa-view/ab-login-abssa-view.component';


@NgModule({
  declarations: [
    PublicComponent,
    AbLoginViewComponent,
    AbLoginAbssaViewComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    SharedModule,
    MatNativeDateModule,
    TranslateModule,
    MatSortModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class PublicModule { }
