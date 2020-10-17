import {Injectable} from '@angular/core';

/* app services */
import {IdService} from './id.service';
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

  constructor(private idService: IdService,
              private storageService: StorageService) {
    /* load data from storage (if exist) */
    this.settings = JSON.parse(this.storageService.get(this.key.settings)) ||
      {
        hideCompleted: false,
        incompleteFirst: true,
        sortOrder: this.sortOrder.newestFirst,
      };

    this.todoList = JSON.parse(this.storageService.get(this.key.todoList)) || [];
  }
  
  toggleCompleted(id: string): void {
    for (const todo of this.todoList) {
      if (todo.id === id) {
        todo.timeCompleted = (todo.timeCompleted === null) ? new Date() : null;
        break;
      }
    }

    this.saveTodo();
  }


  /*
    Todo list manipulation and sorting
   */

  add(todo: string): void {
    if (todo) {
      this.todoList.unshift({
        id: this.idService.getRandomId(),
        task: todo,
        timeCreated: new Date(),
        timeCompleted: null,
      });
    }

    this.saveTodo();
  }

  clearAll(): void {
    this.todoList = [];
    this.saveTodo();
  }


  /*
    Private methods
   */

  saveSettings(): void {
    /* save settings to storage */
    this.storageService.set(this.key.settings, JSON.stringify(this.settings));
  }

  private saveTodo(): void {
    /* save list to storage */
    this.storageService.set(this.key.todoList, JSON.stringify(this.todoList));
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
  id: string,
  task: string;
  timeCreated: Date;
  timeCompleted: Date;
}

interface Settings {
  hideCompleted: boolean;
  incompleteFirst: boolean;
  sortOrder: string;
}
