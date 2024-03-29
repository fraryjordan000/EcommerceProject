import { Component, OnInit } from '@angular/core';
import { ApiFetchService } from '../api-fetch.service';
import { FilterProductsService } from '../filter-products.service';
import { AuthService } from '../auth_db.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private fetch: ApiFetchService, private filter: FilterProductsService, private auth: AuthService, private spinner: NgxSpinnerService) { }

  products_raw: any = []; // raw: Will not be changed when filtering/sorting
  products: any = []; // This is what is displayed on the page, based on products_raw but filtered
  
  brands: any = []; //This array fills the brands sort select in the HTML
  categories: any = []; //This array fills the categories sort select in the HTML
  loaded: boolean = false;

  selected = {
    brand: '',
    category: ''
  };

  ngOnInit() {
    this.spinner.show();
    this.fetch.getData(res1 => {
      this.auth.itemsInCart(res1, res2 => {
        this.products_raw = res2;
        this.products = res2;
        this.spinner.hide();
      });
    });
    this.fetch.getDetails(res => {
      this.brands = res.brands;
      this.categories = res.categories;
      this.loaded = true;
    });
  }

  onBrandChange(event: any) {
      this.filter.brandChange(event, this.selected, this.products_raw, res => {
        this.products = res;
      });
  }

  onCategoryChange(event: any) {
    this.filter.categoryChange(event, this.selected, this.products_raw, res => {
      this.products = res;
    });
  }
  
}
