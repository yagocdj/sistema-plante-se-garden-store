import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Olá, mundo!';
  private _isDesktop = false;

  constructor(
    private responsive: BreakpointObserver
  ) { }

  ngOnInit(): void {
    this.responsive.observe(
      '(min-width: 900px)'
    ).subscribe(
      result => {
        if (result.matches) {
          this._isDesktop = true;
        } else {
          this._isDesktop = false;
        }
      }
    );

  }

  get isDesktop(): boolean {
    return this._isDesktop;
  }

  set isDesktop(value: boolean) {
    this._isDesktop = value;
  }
}
