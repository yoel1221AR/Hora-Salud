import { Component, HostListener, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ab-filter',
  templateUrl: './ab-filter.component.html',
  styleUrls: ['./ab-filter.component.scss']
})
export class AbFilterComponent {
  @Input() fields: any[] = [];


  constructor(private router: Router) {}

  // Método para generar los campos del formulario
  getFieldType(field: any) {
    switch (field.Tipo) {
      case 'fecha':
        return 'date';
      case 'combo':
        return 'select';
      case 'texto':
        return 'text';
      default:
        return '';
    }
  }

  getOrderedFields() {
    return this.fields.sort((a, b) => a.Orden - b.Orden);
  }






  dropdownOpen = false;


  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  navegar(opcion: string) {
    console.log('Navegando a:', opcion);
    this.dropdownOpen = false; // Cierra el menú al hacer clic

    switch (opcion) {
      case 'opcion1':
        this.router.navigate(['/opcion1']);
        break;
      case 'opcion2':
        this.router.navigate(['/opcion2']);
        break;
      case 'opcion3':
        this.router.navigate(['/opcion3']);
        break;
    }
  }

  // Cierra el dropdown si el usuario hace clic fuera
  @HostListener('document:click', ['$event'])
  cerrarDropdown(event: Event) {
    if (!(event.target as HTMLElement).closest('.dropdown-container')) {
      this.dropdownOpen = false;
    }
  }

}
