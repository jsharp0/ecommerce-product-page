import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faCartShopping,
  faChevronLeft,
  faChevronRight,
  faMinus,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';
import { CartComponent } from './cart/cart.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ItemService } from './services/item.service';
import { ProductModalComponent } from './product-modal/product-modal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FontAwesomeModule,
    CartComponent,
    RouterModule,
    CommonModule,
    NavBarComponent,
    ProductModalComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  cartOpen = false;
  productModalOpen = false;
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;
  faCartShopping = faCartShopping;
  faPlus = faPlus;
  faMinus = faMinus;

  quantity = 0;
  pictures = ['1', '2', '3', '4'];
  currentlySelectedPicture = '1';

  constructor(private itemService: ItemService) {}

  openCart() {
    this.cartOpen = true;
  }

  changePicture(direction: 'up' | 'down') {
    let currentPictureIndex = this.pictures.findIndex(
      (pic) => pic === this.currentlySelectedPicture
    );

    if (currentPictureIndex === 0 && direction === 'down') {
      this.currentlySelectedPicture = this.pictures[3];
    } else if (currentPictureIndex === 3 && direction === 'up') {
      this.currentlySelectedPicture = this.pictures[0];
    } else if (direction === 'up') {
      this.currentlySelectedPicture = this.pictures[currentPictureIndex + 1];
    } else {
      this.currentlySelectedPicture = this.pictures[currentPictureIndex - 1];
    }
  }

  addToCart() {
    this.itemService.addItemToCart(this.quantity);
  }
}
