import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductsBlockOneComponent } from './products-block-one/products-block-one.component';
import { ProductsBlockTwoComponent } from './products-block-two/products-block-two.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { RouterModule } from '@angular/router';
import {SWIPER_CONFIG, SwiperConfigInterface, SwiperModule} from 'ngx-swiper-wrapper';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
};

@NgModule({
  declarations: [
    AppComponent,
    ProductsBlockOneComponent,
    ProductsBlockTwoComponent,
    ProductItemComponent,
  ],
  imports: [
    BrowserModule,
    SwiperModule,
  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
