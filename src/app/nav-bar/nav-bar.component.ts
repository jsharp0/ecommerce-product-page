import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faBars,
  faCartShopping,
  faClose,
} from '@fortawesome/free-solid-svg-icons';
import { ItemService } from '../services/item.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule, RouterModule],
  template: `
    <nav [ngClass]="mobileNavOpen ? 'show-nav' : 'hide-nav'">
      <div class="nav-group">
        <fa-icon
          class="menu-toggle"
          [icon]="faBars"
          (click)="mobileNavOpen = !mobileNavOpen"
        ></fa-icon>
        <img src="assets/logo.svg" />
      </div>
      <div class="nav-items">
        <fa-icon
          class="close"
          [icon]="faClose"
          (click)="mobileNavOpen = !mobileNavOpen"
        ></fa-icon>
        <span
          class="nav-link"
          routerLink="/collections"
          routerLinkActive="active"
          >Collections</span
        >
        <span class="nav-link" routerLink="/men" routerLinkActive="active"
          >Men</span
        >
        <span class="nav-link" routerLink="/women" routerLinkActive="active"
          >Women</span
        >
        <span class="nav-link" routerLink="/about" routerLinkActive="active"
          >About</span
        >
        <span class="nav-link" routerLink="/contact" routerLinkActive="active"
          >Contact</span
        >
      </div>
      <div class="nav-group">
        <div class="item-count" *ngIf="itemCount()">{{ itemCount() }}</div>
        <fa-icon
          [icon]="faCartShopping"
          (click)="openCart.emit(true)"
        ></fa-icon>
        <img class="avatar" src="assets/image-avatar.png" />
      </div>
    </nav>
    <div class="dialog-overlay" *ngIf="mobileNavOpen"></div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavBarComponent {
  faClose = faClose;
  faCartShopping = faCartShopping;
  faBars = faBars;

  itemCount = this.itemService.itemsInCart;

  mobileNavOpen = false;

  @Output() openCart = new EventEmitter<boolean>(false);

  constructor(private itemService: ItemService) {}
}
