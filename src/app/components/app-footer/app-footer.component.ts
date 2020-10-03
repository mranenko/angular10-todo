import {Component, OnInit} from '@angular/core';
import {TodoService} from "../../services/todo.service";


@Component({
  selector: 'app-footer',
  templateUrl: './app-footer.component.html',
  styleUrls: ['./app-footer.component.scss']
})
export class AppFooterComponent implements OnInit {
  todo: string = '';

  constructor(private todoService: TodoService) {
  }

  ngOnInit(): void {
  }

  onTodoAdd(event: Event) {
    event.preventDefault();

    this.todoService.add(this.todo);
    this.todo = '';
  }
}
