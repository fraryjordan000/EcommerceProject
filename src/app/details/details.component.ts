import { Component, OnInit } from '@angular/core';
import { ApiFetchService } from '../api-fetch.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth_db.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor(private fetch: ApiFetchService, private route: ActivatedRoute, private auth: AuthService) { }

  product: any = {};

  inCart: boolean = false;
  toggling: boolean = false;
  
  recommended: any = [];

  ngOnInit() {
    this.fetch.getData(res => {
      let prod_ID: any = this.route.snapshot.paramMap.get('id');

      this.auth.itemsInCart(res, items => {
        res=items
        
        for(let i in res) {
          if(res[i].id == prod_ID) {
            this.product = res[i];
            if(res[i].inCart == true) this.inCart = true;
            break;
          }
        }
  
        this.recommended = [];
  
        this.recommended.push(res[Math.round(Math.random()*res.length)]);
        this.recommended.push(res[Math.round(Math.random()*res.length)]);
        this.recommended.push(res[Math.round(Math.random()*res.length)]);
      });
    });
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
