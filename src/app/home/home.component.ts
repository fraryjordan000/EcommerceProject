import { Component, OnInit } from '@angular/core';
import { ApiFetchService } from '../api-fetch.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private fetch: ApiFetchService) { }

  products: any = [];
  brands: any = [];
  categories: any = [];

  ngOnInit() {
    this.fetch.getData(res => {
      this.products = res;
    });
    this.fetch.getDetails(res => {
      this.brands = res.brands;
      this.categories = res.categories;
    });
  }

}
