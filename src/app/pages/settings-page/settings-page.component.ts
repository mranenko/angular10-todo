import {Component, OnInit} from '@angular/core';

/* app services */
import {TodoService} from "../../services/todo.service";


@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.scss']
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
    const eventTarget = <HTMLInputElement>event.target;
    const settingName = eventTarget.name || '';
    const settingValue = eventTarget.value;
    const settingChecked = eventTarget.checked;

    if (settingName) {
      this.todoService.settings[settingName] = settingValue;
      // this.todoService.applySetting(settingName, settingValue);
    }
    else {
      this.todoService.settings[settingValue] = settingChecked;
      // this.todoService.applySetting(settingValue, settingChecked);
    }

    this.todoService.applySettings();
  }
}
