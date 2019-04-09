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
      cb(this.products);
      return;
    }
    this.get('http://98.202.125.118:3000/data.json', res => {
      this.products = res;
      cb(res);
    });
  }

  getDetails(cb: Function) {
    if(this.details != undefined) {
      cb(this.details);
      return;
    }
    this.get('http://98.202.125.118:3000/data_details.json', res => {
      this.details = res;
      cb(res);
    });
  }

  private get(url: string, cb: Function) {
    this.http.get(url).subscribe(res => cb(res));
  }
}
