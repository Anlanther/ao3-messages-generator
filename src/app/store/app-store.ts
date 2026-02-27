import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { AppState } from './app-state.model';
import { initialState } from './app-store.constant';

@Injectable({ providedIn: 'root' })
export class AppStore extends ComponentStore<AppState> {
  store$ = this.select((state) => state);
  messages$ = this.select((state) => state.messages);

  constructor() {
    super(initialState);
  }
}
