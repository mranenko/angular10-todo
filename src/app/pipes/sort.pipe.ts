import { Pipe, PipeTransform } from '@angular/core';


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
      case 'alphabetical':
        return items.sort((a, b) => stringComparator(a.task, b.task));
      case 'newestFirst':
        return items.sort((a, b) => dateComparator(b.timeCreated, a.timeCreated));
      case 'oldestFirst':
        return items.sort((a, b) => dateComparator(a.timeCreated, b.timeCreated));
      default:
        return items;
    }
  }
}
