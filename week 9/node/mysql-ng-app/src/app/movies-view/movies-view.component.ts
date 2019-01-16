import { Component, OnInit } from '@angular/core';
import { MovieApiService } from '../movie-api.service';

@Component({
  selector: 'app-movies-view',
  templateUrl: './movies-view.component.html',
  styleUrls: ['./movies-view.component.css']
})
export class MoviesViewComponent implements OnInit {
  names:Array<any>;
  constructor(private api: MovieApiService) { }
  movies:Array<any>;

  ngOnInit() {
    this.api.allMovies().subscribe(data => { 
      this.names = (<any>data)
      this.get()
    })
  }

  get() {
    this.api.getMovie(this.names).subscribe(data => this.movies = (<any>data))
  }

}
