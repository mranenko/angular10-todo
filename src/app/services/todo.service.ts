import {Injectable} from '@angular/core';

/* App services */
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
  }

  add(todo: string): void {
    if (todo) {
      this.todoList.push({
        task: todo,
        timeCreated: new Date(),
        timeCompleted: null,
      });
    }

    this.storageService.set(this.key.todoList, JSON.stringify(this.todoList));
  }

  getList(): Todo[] {
    this.todoList = JSON.parse(this.storageService.get(this.key.todoList)) || [];

    return this.todoList;
  }

  toggleComplete(todoIndex: number): void {
    if (todoIndex < this.todoList.length) {
      this.todoList[todoIndex].timeCompleted =
        (this.todoList[todoIndex].timeCompleted === null) ?
          new Date() : null;
    }
  }
}


interface Todo {
  task: string;
  timeCreated: Date;
  timeCompleted: Date;
}
