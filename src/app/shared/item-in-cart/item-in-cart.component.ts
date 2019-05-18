import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/auth_db.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-in-cart',
  templateUrl: './item-in-cart.component.html',
  styleUrls: ['./item-in-cart.component.scss']
})
export class ItemInCartComponent implements OnInit {

  @Input('product') product: any;
  private inCart: boolean = true;

  private toggling: boolean = false;

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {}

  toggle_inCart() {
    this.inCart = !this.inCart;
    if(this.toggling) return;
    this.toggling = true;
    if(this.inCart) {
      this.auth.addToCart(this.product, () => {
        this.toggling = false;
      });
    } else {
      this.auth.removeFromCart(this.product.id, () => {
        this.toggling = false;
      });
    }
  }

  toDetails(id: number) {
    this.router.navigate(['/reroute', 'details/'+id]);
  }

}
