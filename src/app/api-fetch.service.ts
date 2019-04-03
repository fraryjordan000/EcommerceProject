import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiFetchService {

  private tokenBlob: string = 'b590e45d218f282cb94bcc056d9fdd85bc983453e465a3d7f948ea195fc2f1f2985dca29c29fbe3fc53c92dfcb69b1c3';

  private options: any;

  private products: any;

  constructor(private http: HttpClient) {
    this.options= {
      headers: new HttpHeaders({
          authorization: this.tokenBlob
      })
    };
    
  }

  getData(cb: Function) {
    if(this.products != undefined) {
      this.subscribeToData(cb);
    } else {
      this.get(res => cb(res));
    }
  }

  private subscribeToData(cb: Function) {
    this.products.subscribe(res => cb(res));
  }

  private get(cb: Function) {
    this.products = this.http.get('http://98.202.125.118:3000/data', this.options);
    this.products.subscribe(res => cb(res));
  }
}
