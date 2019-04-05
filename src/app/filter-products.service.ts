import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilterProductsService {

  constructor() { }

  brandChange(event: any, selected: any, products_raw: any, cb: Function) {
    let brand = event.target.value;
    selected.brand = brand;
    let products = products_raw;
    if(brand == '') {
      if(selected.category != '') {
        this.filterCategory(selected.category, products, res => {
          products = res;
          cb(products);
        });
      } else {
        products = products_raw;
        cb(products);
      }
      return;
    }
    this.filterBrand(brand, products, res1 => {
      if(selected.category == '') {
        products = res1;
        cb(products);
        return;
      }
      this.filterCategory(selected.category, res1, res2 => {
        products = res2;
        cb(products);
      });
    });
  }

  categoryChange(event: any, selected: any, products_raw: any, cb: Function) {
    let category = event.target.value;
    selected.category = category;
    let products = products_raw;
    if(category == '') {
      if(selected.brand != '') {
        this.filterBrand(selected.brand, products, res => {
          products = res;
          cb(products);
        });
      } else {
        products = products_raw;
        cb(products);
      }
      return;
    }
    this.filterCategory(category, products, res1 => {
      if(selected.brand == '') {
        products = res1
        cb(products);
        return;
      }
      this.filterBrand(selected.brand, res1, res2 => {
        products = res2
        cb(products);
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
