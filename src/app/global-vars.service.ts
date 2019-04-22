import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalVarsService {

  private data = {};

  constructor() { }

  setVar(name: string, value: any): void {
    if(this.data[name] != undefined) {
      this.data[name].next(value);
      return;
    }
    this.data[name] = new BehaviorSubject(value).asObservable();
  }

  exists(name: string) {
    if(this.data[name] != undefined) return true;
    return false;
  }

  getVar(name: string): Observable<any> {
    if(!this.exists(name)) {
      return undefined;
    }
    return this.data[name];
  }
}
