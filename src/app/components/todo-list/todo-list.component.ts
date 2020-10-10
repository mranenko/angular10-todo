import {Component, OnInit} from '@angular/core';
import {TodoService} from '../../services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  constructor(public todoService: TodoService) {
  }

  ngOnInit(): void {
  }


  /*
    Event handlers
   */

  onClearAll(): void {
    this.todoService.clearAll();
  }

  onClearCompleted(): void {
    this.todoService.clearCompleted();
  }

  onTodoClick(todoIndex): void {
    this.todoService.toggleCompleted(todoIndex);
  }


  /*
    Private methods
   */

  private getContainsCompleted(): boolean {
    let containsCompleted = false;

    this.todoService.todoList.forEach((todo) => {
      containsCompleted = containsCompleted || (todo.timeCompleted !== null);
    });

    return containsCompleted;
  }
}
