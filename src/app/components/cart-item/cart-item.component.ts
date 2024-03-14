import { Component, Input } from '@angular/core';
import { CartItem } from '../../cart-item.entity';
import {
  getDiscountAmount,
  getDiscountedPrice,
  getPrice,
} from '../../cart-utils';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css',
})
export class CartItemComponent {
  @Input()
  item: CartItem | null = null;

  vat = 0.22;

  getItemPrice(item: CartItem) {
    const discountedPrice = getDiscountedPrice(item.netPrice, item.discount);
    return getPrice(discountedPrice * item.quantity, this.vat);
  }

  getDiscountAmount(item: CartItem) {
    return getDiscountAmount(item.netPrice, item.discount) * item.quantity;
  }
}
