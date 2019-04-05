import { Component, OnInit } from '@angular/core';
import { ApiFetchService } from '../api-fetch.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private fetch: ApiFetchService) { }

  products_raw: any = []; // raw: Will not be changed when filtering/sorting
  products: any = []; // This is what is displayed on the page, based on products_raw but filtered
  
  brands: any = []; //This array fills the 
  categories: any = [];
  loaded: boolean = false;

  selected = {
    brand: '',
    category: ''
  };

  ngOnInit() {
    this.fetch.getData(res => {
      this.products_raw = res;
      this.products = res;
    });
    this.fetch.getDetails(res => {
      this.brands = res.brands;
      this.categories = res.categories;
      this.loaded = true;
    });
  }

  onBrandChange(event: any) {
      let brand = event.target.value;
      this.selected.brand = brand;
      this.products = this.products_raw;
      if(brand == '') {
        if(this.selected.category != '') {
          this.filterCategory(this.selected.category, this.products, res => {
            this.products = res;
          });
        } else {
          this.products = this.products_raw;
        }
        return;
      }
      this.filterBrand(brand, this.products, res1 => {
        if(this.selected.category == '') {
          this.products = res1;
          return;
        }
        this.filterCategory(this.selected.category, res1, res2 => {
          this.products = res2;
        });
      });
  }

  onCategoryChange(event: any) {
    let category = event.target.value;
    this.selected.category = category;
    this.products = this.products_raw;
    if(category == '') {
      if(this.selected.brand != '') {
        this.filterBrand(this.selected.brand, this.products, res => {
          this.products = res;
        });
      } else {
        this.products = this.products_raw;
      }
      return;
    }
    this.filterCategory(category, this.products, res1 => {
      if(this.selected.brand == '') {
        this.products = res1
        console.log(this.products);
        return;
      }
      this.filterBrand(this.selected.brand, res1, res2 => {
        this.products = res2
      });
    });
  }

  private filterBrand(brand: string, arr: any, cb: Function) {
    let rtn = [];
    for(let i in arr) {
      if(arr[i].brand == brand) {
        rtn.push(arr[i]);
      }
    }
    cb(rtn);
  }

  private filterCategory(category: string, arr: any, cb: Function) {
    let rtn = [];
    for(let i in arr) {
      if(arr[i].category == category) {
        rtn.push(arr[i]);
      }
    }
    cb(rtn);
  }
  
}
