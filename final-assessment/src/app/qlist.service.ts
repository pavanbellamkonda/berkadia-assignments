import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QlistService {

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get('http://api.myjson.com/bins/gij7c');
  }
}
