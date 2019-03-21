import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiFetchService {

  private url: string = 'http://makeup-api.herokuapp.com/api/v1/products.json';

  constructor(private http: HttpClient) { }

  getItems(cb) {
    this.get(this.url, res => cb(res));
  }

  private get(url: string, cb: Function) {
    let tmp: any;
    this.http.get(url).subscribe(
      function(res) {
        tmp = res;
        if(cb != undefined) {
          cb(res);
        }
      }
    );
    return tmp;
  }
}
