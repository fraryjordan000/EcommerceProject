import { Component, OnInit } from '@angular/core';
import { ApiFetchService } from '../api-fetch.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private fetch: ApiFetchService) { }

  ngOnInit() {
    this.fetch.getData(res => {
      console.log(res);
    });
  }

}
