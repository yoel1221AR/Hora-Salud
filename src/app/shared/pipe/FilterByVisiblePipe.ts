import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByVisible'
})
export class FilterByVisiblePipe implements PipeTransform {

  transform(fields: any[], visible: boolean = true): any[] {
    return fields.filter(field => field.Visible === visible);
  }

}
