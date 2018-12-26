import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AqApiService {

  constructor(private http:HttpClient) { }

  countries(){
    return this.http.get('https://api.openaq.org/v1/countries?order_by=locations&sort=desc');
  }

  cities(id:String){
    return this.http.get('https://api.openaq.org/v1/cities?order_by=measurements&sort=desc&country=' + id)
  }

  measures(city:String){
    return this.http.get('https://api.openaq.org/v1/measurements?city=' + city)
  }
}
