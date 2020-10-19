export class TodoSettings {
  /* available sort order options */
  static readonly sortOrder = {
    alphabetical: 'alphabetical',
    newestFirst: 'newestFirst',
    oldestFirst: 'oldestFirst',
  };

  /* default settings */
  static readonly defaultSettings = {
    hideCompleted: false,
    incompleteFirst: true,
    sortOrder: TodoSettings.sortOrder.newestFirst,
  };
}
