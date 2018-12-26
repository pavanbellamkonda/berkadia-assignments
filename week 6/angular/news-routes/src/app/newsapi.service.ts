import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsapiService {

  api_key = '88c100da2a3c4f0abed906f645520816';

  constructor(private http: HttpClient) { }

  home() {
    return this.http.get('https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=' + this.api_key);
  }

  sports() {
    return this.http.get('https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=' + this.api_key);
  }

  busi() {
    return this.http.get('https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=' + this.api_key);
  }

  tech() {
    return this.http.get('https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=' + this.api_key);
  }

} 
