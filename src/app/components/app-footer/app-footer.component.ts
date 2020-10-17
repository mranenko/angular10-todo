import {Component, OnInit} from '@angular/core';
import {TodoService} from "../../services/todo.service";


@Component({
  selector: 'app-footer',
  templateUrl: './app-footer.component.html',
})
export class AppFooterComponent implements OnInit {
  todo: string = '';

  constructor(private todoService: TodoService) {
  }

  ngOnInit(): void {
  }

  onTodoAdd() {
    this.todoService.add(this.todo);
    this.todo = '';
  }
}
