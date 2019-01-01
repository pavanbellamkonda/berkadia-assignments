import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieApiService {

  constructor(private http: HttpClient) { }

  getMovies() {
    return this.http.get('http://192.168.0.101:3000/movies');
  }

  movieData(name: String) {
    return this.http.get('http://192.168.0.101:3000/movie-name?name=' + name);
  }
}
