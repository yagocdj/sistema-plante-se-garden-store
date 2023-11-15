import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FlexModule } from '@angular/flex-layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatInputModule } from '@angular/material/input';
import { DesktopMenuComponent } from './desktop-menu/desktop-menu.component';
import { RouterModule } from '@angular/router';
import { PedidoModule } from '../pedido/pedido.module';

@NgModule({
  declarations: [
    MenuComponent,
    DesktopMenuComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexModule,
    MatSidenavModule,
    MatInputModule,
    RouterModule,
    PedidoModule
  ],
  exports: [
    MenuComponent,
    DesktopMenuComponent
  ]
})
export class LayoutModule { }
