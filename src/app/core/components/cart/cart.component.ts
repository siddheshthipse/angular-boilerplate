import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/shared/models/cart.interface';
import { CartFascade } from '../../fascades/cart.fascade';
import { CartStateModel } from '../../state-management/cart.state';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartArray: CartStateModel[];
  // eslint-disable-next-line @typescript-eslint/naming-convention
  constructor(private f_cart: CartFascade) {}

  ngOnInit(): void {
    this.f_cart.loadCartData();

    setTimeout(() => {
      this.f_cart.$stateData.subscribe((returnData) => {
        this.cartArray = returnData;

        console.log('This is data coming from Array YAAY');
        console.log(this.cartArray);
      });
    }, 2000);
  }
}
