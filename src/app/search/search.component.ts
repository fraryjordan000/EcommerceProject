import { Component, OnInit } from '@angular/core';
import { ApiFetchService } from '../api-fetch.service';
import { ActivatedRoute } from '@angular/router';
import { FilterProductsService } from '../filter-products.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private fetch: ApiFetchService, private route: ActivatedRoute, private filter: FilterProductsService) { }

  products: any = [];
  products_raw: any = [];
  brands: any = [];
  categories: any = [];

  search_item: string = '';

  loaded: boolean = false;

  selected = {
    brand: '',
    category: ''
  };

  ngOnInit() {
    this.fetch.getData(res => {
      this.search_item = this.route.snapshot.paramMap.get('item');
      let search_regex: RegExp = new RegExp(this.search_item, 'i');
      let rtn = [];
      for(let i in res) {
        if(res[i].name.match(search_regex) != null) {
          rtn.push(res[i]);
        }
      }
      this.products_raw = rtn;
      this.products = rtn;
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
