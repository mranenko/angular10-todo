import {Injectable} from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor() {
  }

  get(key: string): string {
    key = key || '';

    return key ? window.localStorage.getItem(key) : '';
  }

  set(key, value): void {
    key = key || '';
    value = value || '';

    if (key) {
      window.localStorage.setItem(key, value);
    }
  }

  remove(key): void {
    key = key || '';

    if (key) {
      window.localStorage.removeItem(key);
    }
  }
}
