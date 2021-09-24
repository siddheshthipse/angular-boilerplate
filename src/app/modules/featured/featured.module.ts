import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturedRoutingModule } from './featured-routing.module';
import { FeaturedComponent } from './featured.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [FeaturedComponent],
  imports: [
    CommonModule,
    FeaturedRoutingModule,
    SharedModule
  ]
})
export class FeaturedModule { }
