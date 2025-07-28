import { Component } from '@angular/core';
import { AbDashboardService } from '../../services/ab-dashboard.services';
import { IFileds } from 'src/app/abssa/interfaces/Igs-fileds';

@Component({
  selector: 'app-ab-rrhh-config-tipoasistencia',
  templateUrl: './ab-rrhh-config-tipoasistencia.component.html',
  styleUrls: ['./ab-rrhh-config-tipoasistencia.component.scss']
})
export class AbRRHHTipoasisComponent {
  fieldsData: any[] = [];
  columns: any = [
      {
          "Name": "ver Detalle",
          "Field": "ver Detalle",
          "Order": 0,
          "Visible": true,
          "Exportable": false,
          "Type": "custom",
          "CssClass": "text-center w-1p",
          "Format": "",
          "Internal": false,
          "CssClassHeader": "hidden text-center w-1p",
          "Icon": ""
      },
      {
          "Name": "Empleado",
          "Field": "Nombre Completo",
          "Order": 1,
          "Visible": true,
          "Exportable": true,
          "Type": "text",
          "CssClass": "",
          "Format": "",
          "Internal": false,
          "CssClassHeader": "w-10p",
          "Icon": ""
      },
      {
          "Name": "cuil",
          "Field": "CUIL",
          "Order": 2,
          "Visible": true,
          "Exportable": true,
          "Type": "text",
          "CssClass": "w-3p",
          "Format": "",
          "Internal": false,
          "CssClassHeader": "w-3p",
          "Icon": ""
      },
      {
          "Name": "Planificados",
          "Field": "Minutos Planif",
          "Order": 3,
          "Visible": true,
          "Exportable": true,
          "Type": "text",
          "CssClass": "w-1p",
          "Format": "",
          "Internal": false,
          "CssClassHeader": "w-1p",
          "Icon": ""
      },
      {
          "Name": "Presentes",
          "Field": "MinutosPresente",
          "Order": 4,
          "Visible": true,
          "Exportable": true,
          "Type": "text",
          "CssClass": "w-1p",
          "Format": "",
          "Internal": false,
          "CssClassHeader": "w-1p",
          "Icon": ""
      },
      {
          "Name": "Presentes Feriado",
          "Field": "MinutosPresenteFeriado",
          "Order": 5,
          "Visible": true,
          "Exportable": true,
          "Type": "text",
          "CssClass": "w-1p",
          "Format": "",
          "Internal": false,
          "CssClassHeader": "w-1p",
          "Icon": ""
      },
      {
          "Name": "Presentes s/Planificacion",
          "Field": "DiasPresenteSinPlanif",
          "Order": 6,
          "Visible": true,
          "Exportable": true,
          "Type": "text",
          "CssClass": "w-1p",
          "Format": "",
          "Internal": false,
          "CssClassHeader": "w-1p",
          "Icon": ""
      },
      {
          "Name": "Presentes s/Planif. Feriado",
          "Field": "DiasPresenteSinPlanifFeriado",
          "Order": 7,
          "Visible": true,
          "Exportable": true,
          "Type": "text",
          "CssClass": "w-1p",
          "Format": "",
          "Internal": false,
          "CssClassHeader": "w-1p",
          "Icon": ""
      },
      {
          "Name": "Ausencias Justificadas",
          "Field": "MinutosJustif",
          "Order": 8,
          "Visible": true,
          "Exportable": true,
          "Type": "text",
          "CssClass": "w-1p",
          "Format": "",
          "Internal": false,
          "CssClassHeader": "w-1p",
          "Icon": ""
      },
      {
          "Name": "Ausencias Injustificadas",
          "Field": "MinutosAusenteInjustif",
          "Order": 9,
          "Visible": true,
          "Exportable": true,
          "Type": "text",
          "CssClass": "w-1p",
          "Format": "",
          "Internal": false,
          "CssClassHeader": "w-1p",
          "Icon": ""
      },
      {
          "Name": "Vacaciones",
          "Field": "DiasVacaciones",
          "Order": 10,
          "Visible": true,
          "Exportable": true,
          "Type": "text",
          "CssClass": "w-1p",
          "Format": "",
          "Internal": false,
          "CssClassHeader": "w-1p",
          "Icon": ""
      },
      {
          "Name": "Novedades Pendientes",
          "Field": "NovedadesPendientes",
          "Order": 11,
          "Visible": true,
          "Exportable": true,
          "Type": "text",
          "CssClass": "w-1p",
          "Format": "",
          "Internal": false,
          "CssClassHeader": "w-1p",
          "Icon": ""
      },
      {
          "Name": "Min lleg tarde",
          "Field": "minutosLlegadaTarde",
          "Order": 12,
          "Visible": true,
          "Exportable": false,
          "Type": "text",
          "CssClass": "w-1p",
          "Format": "",
          "Internal": false,
          "CssClassHeader": "w-1p",
          "Icon": ""
      },
      {
          "Name": "Mins Retiro Anticipado",
          "Field": "minutosRetiroAnticipado",
          "Order": 13,
          "Visible": true,
          "Exportable": false,
          "Type": "text",
          "CssClass": "w-1p",
          "Format": "",
          "Internal": false,
          "CssClassHeader": "w-1p",
          "Icon": ""
      },
      {
          "Name": "minutosapagar",
          "Field": "MinutosAPagar",
          "Order": 14,
          "Visible": false,
          "Exportable": false,
          "Type": "text",
          "CssClass": "w-1p",
          "Format": "",
          "Internal": false,
          "CssClassHeader": "w-1p",
          "Icon": ""
      },
      {
        "Name": "Mins retiro anticipado",
        "Field": "minutosLlegadaTarde_RetiroAnticipado",
        "Order": 18,
        "Visible": false,
        "Exportable": false,
        "Type": "text",
        "CssClass": "w-1p",
        "Format": "",
        "Internal": false,
        "CssClassHeader": "w-1p",
        "Icon": ""
    },
      {
          "Name": "Hs a acompensar",
          "Field": "MinutosACompensar",
          "Order": 15,
          "Visible": true,
          "Exportable": false,
          "Type": "text",
          "CssClass": "w-1p",
          "Format": "",
          "Internal": false,
          "CssClassHeader": "w-1p",
          "Icon": ""
      },
      {
          "Name": "Hs desestimados",
          "Field": "MinutosDesestimados",
          "Order": 16,
          "Visible": true,
          "Exportable": false,
          "Type": "text",
          "CssClass": "w-1p",
          "Format": "",
          "Internal": false,
          "CssClassHeader": "w-1p",
          "Icon": ""
      },
      {
          "Name": "Hs a definir",
          "Field": "MinutosSinDefinir",
          "Order": 17,
          "Visible": true,
          "Exportable": false,
          "Type": "text",
          "CssClass": "w-1p",
          "Format": "",
          "Internal": false,
          "CssClassHeader": "w-1p",
          "Icon": ""
      },

      {
          "Name": "hs ext 50%",
          "Field": "HExtra_50",
          "Order": 19,
          "Visible": true,
          "Exportable": true,
          "Type": "text",
          "CssClass": "w-1p",
          "Format": "",
          "Internal": false,
          "CssClassHeader": "w-1p",
          "Icon": ""
      },
      {
          "Name": "hs ext 100%",
          "Field": "HExtra_100",
          "Order": 24,
          "Visible": true,
          "Exportable": true,
          "Type": "text",
          "CssClass": "w-1p",
          "Format": "",
          "Internal": false,
          "CssClassHeader": "w-1p",
          "Icon": ""
      },
      {
          "Name": "hs ext 150%",
          "Field": "HExtra_150",
          "Order": 27,
          "Visible": true,
          "Exportable": true,
          "Type": "text",
          "CssClass": "w-1p",
          "Format": "",
          "Internal": false,
          "CssClassHeader": "w-1p",
          "Icon": ""
      },
      {
          "Name": "hasta",
          "Field": "fechaEgreso",
          "Order": 36,
          "Visible": true,
          "Exportable": true,
          "Type": "text",
          "CssClass": "",
          "Format": "",
          "Internal": false,
          "CssClassHeader": "",
          "Icon": ""
      }
  
  ]
   data = [
    {
      verDetalle: 'Ver',
      Name: 'Juan Pérez',
      CUIL: '2012345678',
      MinutosPlanif: '480',
      MinutosPresente: '450',
      MinutosPresenteFeriado: '0',
      DiasPresenteSinPlanif: '30',
      DiasPresenteSinPlanifFeriado: '5',
      MinutosJustif: '120',
      MinutosAusenteInjustif: '60',
      DiasVacaciones: '10',
      NovedadesPendientes: '2',
      minutosLlegadaTarde: '15',
      minutosRetiroAnticipado: '10',
      MinutosAPagar: '',
      MinutosACompensar: '20',
      MinutosDesestimados: '5',
      MinutosSinDefinir: '0',
      minutosLlegadaTarde_RetiroAnticipado: '',
      HExtra_50: '10',
      HExtra_100: '5',
      HExtra_150: '3',
      fechaEgreso: '2025-02-04',
    },
    {
      verDetalle: 'Ver',
      Name: 'Ana López',
      CUIL: '20234567890',
      MinutosPlanif: '400',
      MinutosPresente: '380',
      MinutosPresenteFeriado: '10',
      DiasPresenteSinPlanif: '25',
      DiasPresenteSinPlanifFeriado: '3',
      MinutosJustif: '60',
      MinutosAusenteInjustif: '30',
      DiasVacaciones: '15',
      NovedadesPendientes: '1',
      minutosLlegadaTarde: '10',
      minutosRetiroAnticipado: '5',
      MinutosAPagar: '',
      MinutosACompensar: '15',
      MinutosDesestimados: '3',
      MinutosSinDefinir: '0',
      minutosLlegadaTarde_RetiroAnticipado: '',
      HExtra_50: '5',
      HExtra_100: '2',
      HExtra_150: '1',
      fechaEgreso: '2025-02-04',
    },
    {
      verDetalle: 'Ver',
      Name: 'Carlos García',
      CUIL: '20345678901',
      MinutosPlanif: '420',
      MinutosPresente: '400',
      MinutosPresenteFeriado: '0',
      DiasPresenteSinPlanif: '28',
      DiasPresenteSinPlanifFeriado: '4',
      MinutosJustif: '100',
      MinutosAusenteInjustif: '50',
      DiasVacaciones: '12',
      NovedadesPendientes: '0',
      minutosLlegadaTarde: '20',
      minutosRetiroAnticipado: '8',
      MinutosAPagar: '',
      MinutosACompensar: '10',
      MinutosDesestimados: '8',
      MinutosSinDefinir: '0',
      minutosLlegadaTarde_RetiroAnticipado: '',
      HExtra_50: '8',
      HExtra_100: '4',
      HExtra_150: '2',
      fechaEgreso: '2025-02-04',
    },
    // Puedes seguir añadiendo más objetos conforme a la estructura.
  ];
  
  
  

   constructor(private abDashboardService: AbDashboardService) {
  
      this.getFields();
    }
  getFields() {
    this.abDashboardService.getFields().subscribe((data: IFileds[]) => {
      this.fieldsData = data;
      console.log('fieldsData cargados:', this.fieldsData);
    });
  }
}
