import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IOptionRequest } from 'src/app/abssa/interfaces/ab-dashboard-interfaces/Igs-optionRequest';
import { AbListAbmService } from '../../services/ab.listAbm.services';
import { IOptionAbm } from 'src/app/abssa/interfaces/Igs-optionAbm';

@Component({
  selector: 'app-ab-list-abm',
  templateUrl: './ab-list-abm.component.html',
  styleUrls: ['./ab-list-abm.component.scss']
})
export class AbListAbmComponent {

  listAmb: IOptionAbm[] = []

 constructor(private abListAbmService: AbListAbmService) {

  }

  ngOnInit() {
    this.getListbm();

  }

  
    getListbm() {
      this.abListAbmService.getListAbm().subscribe((data: IOptionAbm[]) => {
        this.listAmb = data;
        console.log('ListAbm cargados:', this.listAmb);
        this.groupByGrupoAbm(); // Llamamos a la función después de cargar los datos
      });
    }
    groupedAbms: { [key: string]: IOptionAbm[] } = {};
    groupByGrupoAbm() {
      this.groupedAbms = this.listAmb.reduce((acc, solicitud) => {
        if (!acc[solicitud.Grupo]) {
          acc[solicitud.Grupo] = [];
        }
        acc[solicitud.Grupo].push(solicitud);
        return acc;
      }, {} as { [key: string]: IOptionAbm[] });
    }
  
}
