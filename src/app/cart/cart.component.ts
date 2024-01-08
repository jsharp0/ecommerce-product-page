import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faClose, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { ItemService } from '../services/item.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  template: `
    <div class="cart">
      <div class="heading-container">
        <span class="heading">Cart</span>
        <fa-icon
          class="close"
          [icon]="faClose"
          (click)="close.emit(true)"
        ></fa-icon>
      </div>
      <div class="container">
        <div class="items" *ngIf="itemsInCart()">
          <div class="item-info">
            <img src="assets/image-product-1-thumbnail.jpg" />
            <div>
              <div class="name">Fall Limited Edition Sneakers</div>
              <div class="price">
                $125.00 x {{ itemsInCart() }}
                <span class="total-price">$375.00</span>
              </div>
            </div>
          </div>
          <fa-icon
            class="remove-icon"
            [icon]="faTrashCan"
            (click)="clearCart()"
          ></fa-icon>
        </div>
        <button class="btn" *ngIf="itemsInCart()">Checkout</button>
        <div class="empty-cart" *ngIf="!itemsInCart()">Your cart is empty.</div>
      </div>
    </div>
  `,
  styles: [
    `
      .empty-cart {
        font-weight: 700;
        margin: 4.5rem 0;
        text-align: center;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartComponent {
  faTrashCan = faTrashCan;
  faClose = faClose;
  itemsInCart = this.itemService.itemsInCart;
  @Output() close = new EventEmitter<boolean>(false);

  constructor(private itemService: ItemService) {}

  clearCart() {
    this.itemService.clearCart();
  }
}
