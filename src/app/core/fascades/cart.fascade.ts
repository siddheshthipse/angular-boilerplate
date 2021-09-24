import { Injectable } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { GetData } from '../state-management/cart.action';
import { CartState, CartStateModel } from '../state-management/cart.state';

@Injectable()
export class CartFascade {
  @Select(CartState.getStateData) $stateData: Observable<CartStateModel[]>;

  endpoint = 'http://localhost:3000/cart';
  constructor(private store: Store) {}

  loadCartData() {
    this.store.dispatch(new GetData(this.endpoint));
  }
}
