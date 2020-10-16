import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'sort',
  pure: false,
})
export class SortPipe implements PipeTransform {
  transform(items: any[], sortOrder: string): any[] {
    return items;
  }
}
