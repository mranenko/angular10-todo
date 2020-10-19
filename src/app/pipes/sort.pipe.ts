import { Pipe, PipeTransform } from '@angular/core';

/* app models */
import {TodoSortOrder} from '../models/todo-settings.model';


@Pipe({
  name: 'sort',
  pure: false,
})
export class SortPipe implements PipeTransform {
  transform(items: any[], sortOrder: string): any[] {
    if (items.length === 0) {
      return items;
    }

    const dateComparator = (a, b) => {
      return new Date(a).getTime() - new Date(b).getTime();
    };

    const stringComparator = (a, b) => {
      a = a.toLowerCase();
      b = b.toLowerCase();
      return (a < b) ? -1 : (a > b) ? 1 : 0;
    };

    switch(sortOrder) {
      case TodoSortOrder.Alphabetical:
        return items.sort((a, b) => stringComparator(a.task, b.task));
      case TodoSortOrder.NewestFirst:
        return items.sort((a, b) => dateComparator(b.timeCreated, a.timeCreated));
      case TodoSortOrder.OldestFirst:
        return items.sort((a, b) => dateComparator(a.timeCreated, b.timeCreated));
      default:
        return items;
    }
  }
}
