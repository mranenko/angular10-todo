import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'hideCompleted',
  pure: false,
})
export class HideCompletedPipe implements PipeTransform {
  transform(items: any[], hideCompleted: boolean): any[] {
    if (items.length === 0 || !hideCompleted) {
      return items;
    }

    return items.filter(item =>
      (item.timeCompleted === null)
    );
  }
}
