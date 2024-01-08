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
  selector: 'app-product-modal',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  template: ` <div class="modal-container">
      <fa-icon
        class="close"
        [icon]="faClose"
        (click)="close.emit(true)"
      ></fa-icon>
      <div class="product-img-container">
        <img
          class="arrow left"
          src="assets/left-arrow.svg"
          (click)="changePicture('down')"
        />
        <img
          class="arrow right"
          src="assets/right-arrow.svg"
          (click)="changePicture('up')"
        />

        <img
          class="product-img"
          [src]="'assets/image-product-' + currentlySelectedPicture + '.jpg'"
        />

        <div class="thumbnail-container">
          <img
            class="thumbnail"
            [class.selected]="currentlySelectedPicture === '1'"
            (click)="currentlySelectedPicture = '1'"
            src="assets/image-product-1-thumbnail.jpg"
          />
          <img
            class="thumbnail"
            [class.selected]="currentlySelectedPicture === '2'"
            (click)="currentlySelectedPicture = '2'"
            src="assets/image-product-2-thumbnail.jpg"
          />
          <img
            class="thumbnail"
            [class.selected]="currentlySelectedPicture === '3'"
            (click)="currentlySelectedPicture = '3'"
            src="assets/image-product-3-thumbnail.jpg"
          />
          <img
            class="thumbnail"
            [class.selected]="currentlySelectedPicture === '4'"
            (click)="currentlySelectedPicture = '4'"
            src="assets/image-product-4-thumbnail.jpg"
          />
        </div>
      </div>
    </div>
    <div class="dialog-overlay"></div>`,
  styles: [
    `
      .modal-container {
        position: absolute;
        top: 5rem;
        z-index: 1000;
        margin: auto;
        left: 0;
        right: 0;
        max-width: 850px;

        .thumbnail-container {
          justify-content: center;
          width: 100%;
          display: flex;
        }

        .arrow {
          display: block;
          position: absolute;
          top: 30rem;
          cursor: pointer;

          &.left {
            left: -1rem;
          }

          &.right {
            right: -1rem;
          }
        }
      }

      .close {
        display: block;
        text-align: right;
        font-size: 1.5rem;

        &:hover {
          cursor: pointer;
          color: #ff7e1b;
        }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductModalComponent {
  faClose = faClose;
  @Output() close = new EventEmitter<boolean>(false);
  pictures = ['1', '2', '3', '4'];
  currentlySelectedPicture = '1';

  constructor() {}

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
}
