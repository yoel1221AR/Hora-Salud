import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';
// import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSortModule } from '@angular/material/sort';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { SharedModule } from '../shared/shared.module';
import { AbssaRoutingModule } from './abssa-routing.module';
import { ReactiveFormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    AbssaRoutingModule,
    SharedModule,
    MatNativeDateModule,
    TranslateModule,  
    MatSortModule, 
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule 
  ],
  providers: [
    TranslateService,
    SharedModule,
    TranslateModule,
    DatePipe,
    CurrencyPipe,
  ],
})
export class AbssaModule {}
