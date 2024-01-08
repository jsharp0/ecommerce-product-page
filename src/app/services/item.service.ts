import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  itemsInCart = signal(0);

  addItemToCart(quantity: number) {
    const itemsInCart = this.itemsInCart();
    this.itemsInCart.set(itemsInCart + quantity);
  }

  clearCart() {
    this.itemsInCart.set(0);
  }
}
