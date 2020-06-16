import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product: any;
  @Input() blockType: any;
  showAvailable = false;
  typeOne = 'main';
  typeTwo = 'polki';

  ngOnInit() {
  }

  convertToNumber(raring) {
    return parseInt(raring, 10);
  }

  transformText(comments) {
    let text: string;
    comments = parseInt(comments, 10);
    return comments === 0 ? text = 'рекоендация' : text = 'рекомендации';
  }

  get ratingStar() {
    return [1, 2, 3, 4, 5];
  }
}
