import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiFetchService {

  private products: any;
  private details: any;

  constructor(private http: HttpClient) {}

  getData(cb: Function) {
    if(this.products != undefined) {
      this.subscribeToData(cb);
    } else {
      this.get('http://98.202.125.118:3000/data.json', res => cb(res));
    }
  }

  getDetails(cb: Function) {
    if(this.details != undefined) {
      this.subscribeToDetails(cb);
    } else {
      this.get('http://98.202.125.118:3000/data_details.json', res => cb(res));
    }
  }

  private subscribeToData(cb: Function) {
    this.products.subscribe(res => cb(res));
  }

  private subscribeToDetails(cb: Function) {
    this.details.subscribe(res => cb(res));
  }

  private get(url: string, cb: Function) {
    this.products = this.http.get(url);
    this.products.subscribe(res => cb(res));
  }
}
