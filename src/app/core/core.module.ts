import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { environment } from 'src/environments/environment';
import { SharedModule } from '../shared/shared.module';
import { CartState } from './state-management/cart.state';
import { CartComponent } from './components/cart/cart.component';
import { CartFascade } from './fascades/cart.fascade';


@NgModule({
  declarations: [CartComponent],
  imports: [
    CommonModule,
    SharedModule,
    NgxsModule.forRoot([CartState], {
      developmentMode: !environment.production
    }),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot()
  ],
  providers:[
    CartFascade
  ]
})
export class CoreModule { }
