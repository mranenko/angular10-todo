import {Injectable} from '@angular/core';

/* app services */
import {StorageService} from './storage.service';


@Injectable({
  providedIn: 'root'
})
export class TodoService {
  readonly key = {
    todoList: 'todo-list',
  };

  todoList: Todo[] = [];

  constructor(private storageService: StorageService) {
    /* load list from storage (if exists) */
    this.todoList = JSON.parse(this.storageService.get(this.key.todoList)) || [];
  }


  /*
    Todo list manipulation
   */

  add(todo: string): void {
    if (todo) {
      this.todoList.push({
        task: todo,
        timeCreated: new Date(),
        timeCompleted: null,
      });
    }

    this.saveList();
  }

  clearAll(): void {
    this.todoList = [];
    this.saveList();
  }

  clearCompleted(): void {
    this.todoList = this.todoList.filter(todo => (todo.timeCompleted === null));
    this.saveList();
  }

  toggleCompleted(todoIndex: number): void {
    if (todoIndex < this.todoList.length) {
      this.todoList[todoIndex].timeCompleted =
        (this.todoList[todoIndex].timeCompleted === null) ?
          new Date() : null;

      this.saveList();
    }
  }


  /*
    Private methods
   */

  private saveList(): void {
    /* save list to storage */
    this.storageService.set(this.key.todoList, JSON.stringify(this.todoList));
  }
}


/*
  Data model
 */

interface Todo {
  task: string;
  timeCreated: Date;
  timeCompleted: Date;
}
