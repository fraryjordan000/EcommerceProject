import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/auth_db.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input('product') product: any;
  private inCart: boolean = false;

  private toggling = false;

  constructor(private auth: AuthService) {}

  ngOnInit() {
    if(this.product.inCart) this.inCart = true;
  }

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

}
