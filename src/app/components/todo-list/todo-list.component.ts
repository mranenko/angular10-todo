import {Component, OnInit} from '@angular/core';
import {TodoService} from '../../services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todoList = [];

  constructor(private todoService: TodoService) {
  }

  ngOnInit(): void {
    this.todoList = this.todoService.getList();
  }

  onTodoClick(todoIndex): void {
    this.todoService.toggleComplete(todoIndex);
  }
}
