import { Component, OnInit } from '@angular/core';
import { MovieApiService } from './movie-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  movies: Object;
  constructor(private api: MovieApiService) { }

  ngOnInit() {
    this.api.getMovies().subscribe(data => this.movies = data);

  }
}
