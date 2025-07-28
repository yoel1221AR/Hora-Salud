import { Component, OnInit } from '@angular/core';
import { IAccessFavorite } from 'src/app/abssa/interfaces/ab-dashboard-interfaces/Igs-accesFavorite';
import { AbDashboardService } from '../../services/ab-dashboard.services';
import { IOptionRequest } from 'src/app/abssa/interfaces/ab-dashboard-interfaces/Igs-optionRequest';
import { IOptionGestionar } from 'src/app/abssa/interfaces/ab-dashboard-interfaces/Igs-optionGestionar';
import { Router } from '@angular/router';
import { ITraining } from 'src/app/abssa/interfaces/ab-dashboard-interfaces/Igs-training';

@Component({
  selector: 'app-ab-dashboard',
  templateUrl: './ab-dashboard.component.html',
  styleUrls: ['./ab-dashboard.component.scss']
})
export class AbDashboardComponent implements OnInit {
  accessFavorites: IAccessFavorite[] = []
  listRequest: IOptionRequest[] = []
  listGestionar: IOptionGestionar[] = []
  listTrainings: ITraining[] = []

  constructor(private router: Router,private abDashboardService: AbDashboardService) {

  }

  ngOnInit() {
    this.getAccessFavorites();
    this.getListRequest();
    this.getListGestionar();
    this.getListTraining();

  }



  getAccessFavorites() {
    this.abDashboardService.getAccessFavorites().subscribe((data: IAccessFavorite[]) => {
      this.accessFavorites = data;
      console.log('AccessFavorites cargados:', this.accessFavorites);
    });
  }



  getListRequest() {
    this.abDashboardService.getListRequest().subscribe((data: IOptionRequest[]) => {
      this.listRequest = data;
      console.log('ListRequest cargados:', this.listRequest);
      this.groupByGrupoRequest(); // Llamamos a la función después de cargar los datos
    });
  }
  groupedSolicitudes: { [key: string]: IOptionRequest[] } = {};
  groupByGrupoRequest() {
    this.groupedSolicitudes = this.listRequest.reduce((acc, solicitud) => {
      if (!acc[solicitud.Grupo]) {
        acc[solicitud.Grupo] = [];
      }
      acc[solicitud.Grupo].push(solicitud);
      return acc;
    }, {} as { [key: string]: IOptionRequest[] });
  }


  getListGestionar() {
    this.abDashboardService.getListGestionar().subscribe((data: IOptionGestionar[]) => {
      this.listGestionar = data;
      console.log('ListGestionar cargados:', this.listGestionar);
      this.groupByGrupoGestionar(); // Llamamos a la función después de cargar los datos
    });
  }

  getListTraining() {
    this.abDashboardService.getListTrainings().subscribe((data: ITraining[]) => {
      this.listTrainings = data;
      console.log('ListTraining cargados:', this.listTrainings);
    });
  }

  groupedGestiones: { [key: string]: IOptionGestionar[] } = {};
  groupByGrupoGestionar() {
    this.groupedGestiones = this.listGestionar.reduce((acc, gestiones) => {
      if (!acc[gestiones.Grupo]) {
        acc[gestiones.Grupo] = [];
      }
      acc[gestiones.Grupo].push(gestiones);
      return acc;
    }, {} as { [key: string]: IOptionGestionar[] });
  }


  navigateTo(url: string): void {
    this.router.navigateByUrl("private/" + url);
  }
}
