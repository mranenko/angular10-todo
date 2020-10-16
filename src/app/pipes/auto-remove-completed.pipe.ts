import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'autoRemoveCompleted'
})
export class AutoRemoveCompletedPipe implements PipeTransform {
  transform(items: any[], autoRemoveCompleted: boolean): any[] {
    if (items.length === 0 || !autoRemoveCompleted) {
      return items;
    }

    return items.filter(item =>
      (item.timeCompleted === null)
    );
  }
}
