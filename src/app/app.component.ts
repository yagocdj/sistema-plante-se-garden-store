import { Component, OnInit } from '@angular/core';
import { MediaService } from './shared/services/media.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Olá, mundo!';
  private _isDesktop = false;
  private _mediaService: MediaService = new MediaService('(min-width: 1024px)');

  constructor() { }

  ngOnInit(): void {
    this._mediaService.match$.subscribe(value => this._isDesktop = value);
  }

  get isDesktop(): boolean {
    return this._isDesktop;
  }

  set isDesktop(value: boolean) {
    this._isDesktop = value;
  }
}
