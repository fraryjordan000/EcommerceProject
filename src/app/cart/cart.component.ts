import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth_db.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private auth: AuthService, private spinner: NgxSpinnerService) { }

  cart_items: any = [];

  ngOnInit() {
    this.spinner.show();
    this.auth.getCart(res => {
      this.cart_items = res;
      this.spinner.hide();
    });
  }

  calculatePrice() {
    let rtn: number = 0;
    for(let i in this.cart_items) {
      rtn += parseFloat(this.cart_items[i].price);
    }
    return rtn;
  }

  purchase() {
    if(this.cart_items.length < 1) return;
    let d = new Date();
    let day = d.getDay();
    let ticket = {
      items: this.cart_items,
      total: this.calculatePrice(),
      date: `${d.getMonth()}/${day.toString().length < 2 ? '0'+day : day}/${d.getFullYear()}`,
      id: Math.round(Math.random()*100000)
    }
    console.log(ticket.date);
    this.auth.addTicket(ticket);
    this.auth.clearCart();
    this.cart_items = [];
  }

  empty() {
    this.auth.clearCart();
    this.cart_items = [];
  }

}
