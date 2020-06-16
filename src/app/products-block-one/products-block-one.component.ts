import {Component, OnInit} from '@angular/core';
import { PRODUCTS } from '../../../products-mock';

@Component({
  selector: 'app-products-block-one',
  templateUrl: './products-block-one.component.html',
  styleUrls: ['./products-block-one.component.css']
})
export class ProductsBlockOneComponent implements OnInit {
  blockType = 'main';
  private products = PRODUCTS;

  constructor() { }

  ngOnInit() {
  }
}
