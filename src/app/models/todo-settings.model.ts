export class TodoSettings {
  hideCompleted: boolean;
  incompleteFirst: boolean;
  sortOrder: string;

  constructor() {
    this.hideCompleted = false;
    this.incompleteFirst = true;
    this.sortOrder = TodoSortOrder.NewestFirst;
  };
}

export enum TodoSortOrder {
  Alphabetical = 'alphabetical',
  NewestFirst = 'newestFirst',
  OldestFirst = 'oldestFirst',
}
