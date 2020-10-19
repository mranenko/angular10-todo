import {Injectable} from '@angular/core';

/* app models */
import {TodoItem} from '../models/todo-item.model';
import {TodoSettings} from '../models/todo-settings.model';

/* app services */
import {StorageService} from './storage.service';


@Injectable({
  providedIn: 'root'
})
export class TodoService {
  /* local storage keys */
  readonly key = {
    settings: 'settings',
    todoList: 'todo-list',
  };

  settings: TodoSettings = null;
  todoList: TodoItem[] = [];

  constructor(private storageService: StorageService) {
    /* load settings and todo list data from storage (if exist) */
    this.settings = JSON.parse(this.storageService.get(this.key.settings)) || TodoSettings.defaultSettings;
    this.todoList = JSON.parse(this.storageService.get(this.key.todoList)) || [];
  }
  
  toggleCompleted(id: string): void {
    for (const todo of this.todoList) {
      if (todo.id === id) {
        todo.timeCompleted = (todo.timeCompleted === null) ? new Date() : null;
        break;
      }
    }

    this.saveTodoItemList();
  }


  /*
    Todo list methods
   */

  add(todo: string): void {
    if (todo) {
      this.todoList.push(new TodoItem(todo));
      this.saveTodoItemList();
    }
  }

  clearAll(): void {
    this.todoList = [];
    this.saveTodoItemList();
  }


  /*
    Private methods
   */

  saveSettings(): void {
    /* save settings to storage */
    this.storageService.set(this.key.settings, JSON.stringify(this.settings));
  }

  private saveTodoItemList(): void {
    /* save list to storage */
    this.storageService.set(this.key.todoList, JSON.stringify(this.todoList));
  }
}
