import { Component, OnInit } from '@angular/core';

import { ApiFetchService } from '../api-fetch.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private api: ApiFetchService) { }

  ngOnInit() {
    this.api.getItems(res => {
      console.log(res[2]);
    });
  }

}
