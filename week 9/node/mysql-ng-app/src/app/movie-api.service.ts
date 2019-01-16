import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MovieApiService {

  user: string;
  booked = false;

  constructor(private http: HttpClient) { }

  allMovies() {
    return this.http.get('http://localhost:7000/movies');
  }

  allTheats() {
    return this.http.get('http://localhost:7000/theatres')
  }

  allShows() {
    return this.http.get('http://localhost:7000/shows')
  }

  getMovie(movies) {
    var urlString = '';
    for (let movie of movies) {
      urlString += ('names[]=' + movie + '&') 
    }
    return this.http.get('http://localhost:7000/getmovie?' + urlString)
  }

  getTheat(theats) {
    var urlString = '';
    for (let theat of theats) {
      urlString += ('names[]=' + theat + '&') 
    }
    return this.http.get('http://localhost:7000/gettheatre?' + urlString)
  }

  getMovieShows(name) {
    this.booked = false;
    return this.http.get('http://localhost:7000/shows?movie=' + name)
  }

  getTheatShows(name) {
    this.booked = false;
    return this.http.get('http://localhost:7000/shows?theatre=' + name)
  }

  postBook(show) {
    const headers = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post('http://localhost:7000/book', JSON.stringify(show), headers)
  }

  logInUser() {
    this.user = 'user';
  }

  logInAdmin() {
    this.user = 'admin';
  }

  isLoggedIn() {
    if(this.user == 'admin') {
      return true;
    }
    else {
      return false;
    }
  }

  deleteMovie(name) {
    return this.http.delete('http://localhost:7000/deleteMovie?name=' + name);
  }

  addMovie(movie) {
    const headers = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post('http://localhost:7000/addMovie', JSON.stringify(movie), headers)
  }

  deleteTheatre(name) {
    return this.http.delete('http://localhost:7000/deleteTheatre?name=' + name);
  }

  addTheatre(theatre) {
    const headers = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post('http://localhost:7000/addTheatre', JSON.stringify(theatre), headers)
  }

  deleteShow(show) {
    const headers = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post('http://localhost:7000/deleteShow', JSON.stringify(show), headers)
  }  

  addShow(show) {
    const headers = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post('http://localhost:7000/addShow', JSON.stringify(show), headers)
  }
  
  allBookings() {
    return this.http.get('http://localhost:7000/bookings')
  }

  isBooked() {
    if(this.booked) {
      return true;
    }
    else {
      return false;
    }
  }

  setBooked() {
    this.booked = true;
  }

}
