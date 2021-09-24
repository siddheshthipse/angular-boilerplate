import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { HttpService } from './../http-services/http.service';
import { GetData } from './cart.action';

export class CartStateModel {
  data: any;
}

@State<CartStateModel>({
  name: 'cartstate',
  defaults: {
    data: [],
  },
})
@Injectable()
export class CartState<T> {
  constructor(private hs: HttpService<T>) {}

  @Selector()
  // eslint-disable-next-line no-shadow
  static getStateData<T>(state: CartStateModel): T {
    return state.data;
  }

  @Action(GetData)
  insertDataIntoState(
    ctx: StateContext<CartStateModel>,
    { endpoint }: GetData
  ) {
    return this.hs.getData(endpoint).pipe(
      tap((returnData) => {
        const state = ctx.getState();
        ctx.setState({
          ...state,
          data: returnData,
        });
      })
    );
  }
}
