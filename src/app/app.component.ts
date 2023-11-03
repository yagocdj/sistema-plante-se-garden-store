import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Olá, mundo!';
  private _isMobile = true;

  constructor() {

  }

  get isMobile(): boolean {
    return this._isMobile;
  }

  set isMobile(state: boolean) {
    this._isMobile = state;
  }
}
