import { Component, OnInit } from '@angular/core';
import { ApiFetchService } from '../api-fetch.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private fetch: ApiFetchService) { }

  products: any = [];
  brands: any = [];
  categories: any = [];

  ngOnInit() {
    this.fetch.getData(res => {
      //TODO: filter by product_name, string to be given through input somehow
      // this.products = res;
    });
    this.fetch.getDetails(res => {
      this.brands = res.brands;
      this.categories = res.categories;
    });
  }

}
