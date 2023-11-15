import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Olá, mundo!';
  private _isDesktop = false;
  private _adminRoutes: string[] = [
    '/login-admin', '/listagem-cliente', '/admin-menu'
  ];

  constructor(
    private responsive: BreakpointObserver,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.responsive.observe('(min-width: 900px)').subscribe(
      result => this._isDesktop = result.matches
    );
  }

  isAdminScreen(): boolean {
    return this._adminRoutes.includes(this.router.url);
  }

  get isDesktop(): boolean {
    return this._isDesktop;
  }

  set isDesktop(value: boolean) {
    this._isDesktop = value;
  }
}
