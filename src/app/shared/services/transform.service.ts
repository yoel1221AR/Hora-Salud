import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformDataTable'
})
export class TransformDataTablePipe implements PipeTransform {
  transform(value: any, key: string, keyTranslate: string): string {
    // Implementa la lógica de transformación según tus necesidades
    return `${keyTranslate}.${key.toUpperCase()}: ${value}`;
  }
}