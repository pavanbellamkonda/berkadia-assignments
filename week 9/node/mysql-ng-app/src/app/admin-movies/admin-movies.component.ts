import { Component, OnInit } from '@angular/core';
import { MovieApiService } from '../movie-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-movies',
  templateUrl: './admin-movies.component.html',
  styleUrls: ['./admin-movies.component.css']
})
export class AdminMoviesComponent implements OnInit {

  names: Array<any>;
  constructor(private api: MovieApiService, private router: Router) { }
  movies: Array<any>;

  viewMode = 'view'
  added = false

  movie = {
    "name": '',
    "image": '',
    "cast": '',
    "rating": 0
  };

  ngOnInit() {
    this.getNames()
  }

  getNames() {
    this.api.allMovies().subscribe(data => {
      this.names = (<any>data)
      this.get()
    })
  }

  get() {
    this.api.getMovie(this.names).subscribe(data => this.movies = (<any>data))
  }

  delete(name) {
    this.api.deleteMovie(name).subscribe(data => {
      this.getNames()
      this.viewMode = 'view'
    })
  }

  add() {
    if (this.movie.name && this.movie.image && this.movie.cast && this.movie.rating) {
      this.api.addMovie(this.movie).subscribe((data) => {
        this.movie = {
          "name": '',
          "image": '',
          "cast": '',
          "rating": 0
        };
        this.getNames()
        alert('Success')
      })
    }
    else {
      alert('Please enter all the data')
    }
  }
}
