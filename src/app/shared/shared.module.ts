import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { NiceDateFormatPipePipe } from './pipes/nice-date-format-pipe.pipe';



@NgModule({
  declarations: [NavbarComponent, FooterComponent, NiceDateFormatPipePipe],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    NavbarComponent,
    FooterComponent,
    NiceDateFormatPipePipe
  ]
})
export class SharedModule { }
