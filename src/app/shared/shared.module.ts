import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { ChartComponent } from './components/chart/chart.component';
import { TranslateModule } from '@ngx-translate/core';
import { MatDialogService } from './services/mat-dialog.service';
import { CustomIconColorComponent } from './components/custom-icon-color/custom-icon-color.component';
import { LangSelectorComponent } from './components/langSelector/langSelector.component';
import { LoaderComponent } from './components/loader/loader.component';
import { NoDataComponent } from './components/no-data/no-data.component';
import { TableComponent } from './components/table/table.component';
import { FilterByVisiblePipe } from './pipe/FilterByVisiblePipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { AbTitleHeaderComponent } from './components/ab-title-header/ab-title-header.component';

@NgModule({
  declarations: [
    ChartComponent,
    CustomIconColorComponent,
    LangSelectorComponent,
    LoaderComponent,
    NoDataComponent,
    TableComponent,
    FilterByVisiblePipe,
    AbTitleHeaderComponent  // Asegúrate de que el pipe esté en las declaraciones
  ],
  imports: [CommonModule, MaterialModule, 
    NgxPaginationModule, TranslateModule],
  providers: [MatDialogService],
  exports: [
    MaterialModule,
    ChartComponent,
    CustomIconColorComponent,
    LangSelectorComponent,
    LoaderComponent,
    NoDataComponent,
    TableComponent,
    FilterByVisiblePipe  // Exportar el pipe para usarlo fuera del módulo
  ],
})
export class SharedModule {}
