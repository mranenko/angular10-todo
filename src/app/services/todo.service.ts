import {Injectable} from '@angular/core';

/* App services */
import {StorageService} from './storage.service';


@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todoList: Todo[] = [
    {
      task: 'Walk the dog',
      timeCreated: new Date(),
      timeCompleted: new Date(),
    },
    {
      task: 'Do laundry',
      timeCreated: new Date(),
      timeCompleted: null,
    },
    {
      task: 'Go to the gym',
      timeCreated: new Date(),
      timeCompleted: null,
    },
    {
      task: 'Get groceries',
      timeCreated: new Date(),
      timeCompleted: null,
    }
  ];

  constructor(private storageService: StorageService) {
  }

  getList(): Todo[] {
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
