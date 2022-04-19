import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private _localStorage = localStorage;

  isLocalStorageAvailable(): boolean {
    try {
      const key = '__storage_test__';
      this._localStorage.setItem(key, '');
      this._localStorage.removeItem(key);
      return true;
    } catch (e) {
      return false;
    }
  }

  setItem(key: string, value: string): void {
    if (!this.isLocalStorageAvailable()) {
      return;
    }
    this._localStorage.setItem(key, value);
  }

  getItem(key: string): string {
    if (!this.isLocalStorageAvailable()) {
      return;
    }
    return this._localStorage.getItem(key);
  }

  removeItem(key: string): void {
    if (!this.isLocalStorageAvailable()) {
      return;
    }
    this._localStorage.removeItem(key);
  }
}
