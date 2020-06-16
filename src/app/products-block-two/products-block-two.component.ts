import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { PRODUCTS } from '../../../products-mock';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-products-block-two',
  templateUrl: './products-block-two.component.html',
  styleUrls: ['./products-block-two.component.css']
})
export class ProductsBlockTwoComponent implements OnInit {
  blockType = 'polki';

  public config: SwiperConfigInterface = {
    a11y: true,
    direction: 'horizontal',
    slidesPerView: 4,
    keyboard: true,
    scrollbar: false,
    navigation: true,
    loop: true,
    breakpoints: {
      1024: {
        slidesPerView: 3
      },
      700: {
        slidesPerView: 2
      },
      300: {
        slidesPerView: 1
      },
    },
  };
  public disabled = false;

  private products = PRODUCTS;
  private shuffleProducts: any;

  constructor() { }

  ngOnInit() {
    this.shuffleArray();
  }

  shuffleArray() {
    this.shuffleProducts = [];
    if (this.products) {
      this.products.map((item) => {
        this.shuffleProducts.push(item);
      });
      this.shuffleProducts = this.shuffleProducts.sort( () => Math.random() - 0.5);
    }
  }
}
