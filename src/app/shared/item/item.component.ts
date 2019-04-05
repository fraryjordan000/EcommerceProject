import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input('product') product: any;

  in_cart: boolean;

  constructor() {}

  ngOnInit() {
    this.in_cart = false;
  }

  toggle_in_cart() {
    this.in_cart = !this.in_cart;
  }

}
