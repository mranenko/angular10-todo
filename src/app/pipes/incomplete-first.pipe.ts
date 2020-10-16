import {Pipe, PipeTransform} from '@angular/core';


@Pipe({
  name: 'incompleteFirst'
})
export class IncompleteFirstPipe implements PipeTransform {
  transform(items: any[], incompleteFirst: boolean): any[] {
    if (items.length === 0 || !incompleteFirst) {
      return items;
    }

    let incompleteItems = items.filter(todo => (todo.timeCompleted === null));
    let completedItems = items.filter(todo => (todo.timeCompleted !== null));

    return incompleteItems.concat(completedItems);
  }
}
