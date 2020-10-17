import {Component, OnInit} from '@angular/core';
import {TodoService} from '../../services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
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

  onTodoClick(id): void {
    this.todoService.toggleCompleted(id);
  }
}
