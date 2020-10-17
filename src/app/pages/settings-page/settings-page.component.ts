import {Component, OnInit} from '@angular/core';

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


  /**
   * Event handlers
   */

  onSettingsChange(event: Event): void {
    this.todoService.saveSettings();
  }
}
