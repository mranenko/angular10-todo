import {Injectable} from '@angular/core';

/* app services */
import {StorageService} from './storage.service';


@Injectable({
  providedIn: 'root'
})
export class TodoService {
  readonly key = {
    settings: 'settings',
    todoList: 'todo-list',
  };

  readonly sortOrder = {
    alphabetical: 'alphabetical',
    newestFirst: 'newestFirst',
    oldestFirst: 'oldestFirst',
  };

  settings: Settings = null;
  todoList: Todo[] = [];

  constructor(private storageService: StorageService) {
    /* load data from storage (if exist) */
    this.settings = JSON.parse(this.storageService.get(this.key.settings)) ||
      {
        autoRemoveCompleted: false,
        incompleteFirst: true,
        sortOrder: this.sortOrder.newestFirst,
      };

    this.todoList = JSON.parse(this.storageService.get(this.key.todoList)) || [];
  }

  applySettings(): void {
    /* apply all of the specified todo list settings */
    for (let [setting, value] of Object.entries(this.settings)) {
      console.log(`${setting}: ${value}`);
      this.applySetting(setting, value);
    }
  }

  applySetting(setting, value): void {
    if (setting === 'sortOrder') {
      this.sort(value);
    }
    else if (setting === 'incompleteFirst') {
      this.showIncompleteFirst(value);
    }

    this.saveSettings();
  }

  toggleCompleted(todoIndex: number): void {
    if (todoIndex < this.todoList.length) {
      this.todoList[todoIndex].timeCompleted =
        (this.todoList[todoIndex].timeCompleted === null) ?
          new Date() : null;

      this.applySettings();
    }
  }


  /*
    Todo list manipulation and sorting
   */

  add(todo: string): void {
    if (todo) {
      this.todoList.unshift({
        task: todo,
        timeCreated: new Date(),
        timeCompleted: null,
      });
    }

    this.applySettings();
    this.saveTodo();
  }

  clearAll(): void {
    this.todoList = [];
    this.saveTodo();
  }

  clearCompleted(): void {
    this.todoList = this.todoList.filter(todo => (todo.timeCompleted === null));
    this.saveTodo();
  }


  /*
    Private methods
   */

  private saveSettings(): void {
    /* save settings to storage */
    this.storageService.set(this.key.settings, JSON.stringify(this.settings));
  }

  private saveTodo(): void {
    /* save list to storage */
    this.storageService.set(this.key.todoList, JSON.stringify(this.todoList));
  }

  private showIncompleteFirst(incompleteFirst: boolean): void {
    if (incompleteFirst && this.todoList.length > 0) {
      let incompleteTodoList = this.todoList.filter(todo => (todo.timeCompleted === null));
      let completedTodoList = this.todoList.filter(todo => (todo.timeCompleted !== null));

      if (incompleteTodoList.length > 0 && completedTodoList.length > 0) {
        console.log(incompleteTodoList.concat(completedTodoList));
        this.todoList = incompleteTodoList.concat(completedTodoList);
      }
    }
    else if (!incompleteFirst && this.todoList.length > 0) {
      this.sort(this.settings.sortOrder);
    }

    this.saveTodo();
  }

  private sort(sortOrder: string): void {
    const dateComparator = (a, b) => {
      return new Date(a).getTime() - new Date(b).getTime();
    };

    const stringComparator = (a, b) => {
      a = a.toLowerCase();
      b = b.toLowerCase();
      return (a < b) ? -1 : (a > b) ? 1 : 0;
    };

    if (sortOrder === this.sortOrder.alphabetical) {
      this.todoList.sort((a, b) => stringComparator(a.task, b.task));
    }
    else if (sortOrder === this.sortOrder.newestFirst) {
      this.todoList.sort((a, b) => dateComparator(b.timeCreated, a.timeCreated));
    }
    else if (sortOrder === this.sortOrder.oldestFirst) {
      this.todoList.sort((a, b) => dateComparator(a.timeCreated, b.timeCreated));
    }

    this.saveTodo();
  }
}


/*
  Data models
 */

interface Todo {
  task: string;
  timeCreated: Date;
  timeCompleted: Date;
}

interface Settings {
  autoRemoveCompleted: boolean;
  incompleteFirst: boolean;
  sortOrder: string;
}
