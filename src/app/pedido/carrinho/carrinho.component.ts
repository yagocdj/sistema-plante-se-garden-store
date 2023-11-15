import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewChild} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss']
})
export class CarrinhoComponent implements OnChanges {
  @Input('show') showSidenav = false;
  @Output() sidenavClosed = new EventEmitter<boolean>();
  @ViewChild('sidenav') sidenavElement!: MatSidenav;
  showFiller = false

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.sidenavElement) {
      this.sidenavElement.toggle(changes['showSidenav'].currentValue);
    }
  }

  closeSidenav(): void {
    if (this.sidenavElement) {
      this.sidenavClosed.emit(false);
      this.sidenavElement.toggle();
    }
  }
}
