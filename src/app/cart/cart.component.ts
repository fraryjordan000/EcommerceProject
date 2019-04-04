import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth_db.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private auth: AuthService) { }

  cart_items: any = [];

  ngOnInit() {
    this.auth.getCart(res => {
      this.cart_items = res;
      console.log(res);
    });
  }

}
