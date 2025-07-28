import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input() data: any[] = [];
  @Input() columns: any[] = [];
  page: number = 1;
  @Input() tableStyle: 'default' | 'dark' = 'default'; // 🔹 Define el tipo de `tableStyle`

  // 🔹 Se tipa correctamente `tableStyles`
  tableStyles: { [key in 'default' | 'dark']: { dataHead: any; dataRow: any } } = {
    default: {
      dataHead: { 'background-color': '#007bff', 'color': 'white', 'padding': '10px' },
      dataRow: { 'border-bottom': '1px solid #ddd', 'padding': '10px' }
    },
    dark: {
      dataHead: { 'background-color': '#343a40', 'color': 'white', 'padding': '10px' },
      dataRow: { 'background-color': '#555', 'color': 'white', 'padding': '10px' }
    }
  };

  // Devuelve el texto del tooltip para una acción
  getTooltipText(action: string, dataField: any): string {
    return `Acción: ${action} - Dato: ${dataField}`;
  }

  // Determina el ícono y si la acción está habilitada
  checkAction(dataField: any, action: string) {
    return {
      icon: action === 'edit' ? 'url(/assets/edit-icon.png)' : 'url(/assets/delete-icon.png)',
      pointerEvents: action === 'delete' && dataField.id === 1 ? 'none' : 'auto' // Ejemplo de lógica
    };
  }
   // Función para manejar el evento de cambio de página
   onPageChange(event: any): void {
    // Asegúrate de que el valor emitido sea un número
    this.page = Number(event);
  }

  

// Filtrar y ordenar las columnas antes de mostrarlas en la tabla
getVisibleColumns() {
  return this.columns
    .filter(column => column.Visible)  // Solo las visibles
    .sort((a, b) => a.Order - b.Order); // Ordenarlas según el campo 'Order'
}

getColumnType(column: any): boolean {
  return column.Type === 'custom';
}

onViewDetail(row: any): void {
  console.log('Ver detalle de:', row);
  // Aquí puedes agregar la lógica para mostrar los detalles de la fila
  // Por ejemplo, abrir un modal o redirigir a otra página
}

showDetailStyle(row: any): boolean {
  return true; // Aquí puedes poner la lógica para decidir si aplicar el estilo
}
}
