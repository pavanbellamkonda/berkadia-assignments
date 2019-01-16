import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsapiService {

  api_key = '88c100da2a3c4f0abed906f645520816';
  language: string;

  constructor(private http: HttpClient) { }

  home() {
    return this.http.get('https://newsapi.org/v2/top-headlines?country=' + this.language + '&category=general&apiKey=' + this.api_key);
  }

  sports() {
    return this.http.get('https://newsapi.org/v2/top-headlines?country=' + this.language + '&category=sports&apiKey=' + this.api_key);
  }

  busi() {
    return this.http.get('https://newsapi.org/v2/top-headlines?country=' + this.language + '&category=business&apiKey=' + this.api_key);
  }

  tech() {
    return this.http.get('https://newsapi.org/v2/top-headlines?country=' + this.language + '&category=technology&apiKey=' + this.api_key);
  }

  isSelected() {
    if(this.language)
      return true;
    else
      return false;
  }

  setLanguage(lang) {
    this.language = lang;
  }

} 
