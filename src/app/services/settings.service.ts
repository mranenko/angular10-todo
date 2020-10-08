import {Injectable} from '@angular/core';

/* app services */
import {StorageService} from "./storage.service";


@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  readonly key = {
    settings: 'settings',
  };

  settings: Settings[] = [];

  constructor(private storageService: StorageService) {
    /* load settings from storage (if exists) */
    this.settings = JSON.parse(this.storageService.get(this.key.settings)) || [];
  }


  /*
    Private methods
   */

  private saveSettings(): void {
    /* save settings to storage */
    this.storageService.set(this.key.settings, JSON.stringify(this.settings));
  }
}


/*
  Data model
 */

interface Settings {
  incompleteFirst: boolean;
  sort: {
    alphabetically: boolean;
    newestFirst: boolean;
    oldestFirst: boolean;
  };
}
