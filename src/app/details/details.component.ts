import { Component, OnInit } from '@angular/core';
import { ApiFetchService } from '../api-fetch.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor(private fetch: ApiFetchService) { }

  ngOnInit() {
    this.fetch.getData(res => {
      //TODO: from some kind of input, filter by product id to a single product
    });
  }

}
