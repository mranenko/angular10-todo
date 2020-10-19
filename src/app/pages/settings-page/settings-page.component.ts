import {Component, OnInit} from '@angular/core';

/* app models */
import {TodoSortOrder} from '../../models/todo-settings.model';

/* app services */
import {TodoService} from "../../services/todo.service";


@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
})
export class SettingsPageComponent implements OnInit {
  constructor(public todoService: TodoService) {
  }

  ngOnInit(): void {
  }

  public get todoSortOrder(): typeof TodoSortOrder {
    return TodoSortOrder;
  }


  /**
   * Event handlers
   */

  onSettingsChange(): void {
    this.todoService.saveTodoSettings();
  }
}
