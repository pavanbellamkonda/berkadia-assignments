import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieApiService } from '../movie-api.service';
import { BookingViewComponent } from '../booking-view/booking-view.component';


@Component({
  selector: 'app-movie-shows',
  templateUrl: './movie-shows.component.html',
  styleUrls: ['./movie-shows.component.css']
})
export class MovieShowsComponent implements OnInit {
  shows:Array<any>;
  private sub: any;
  movieData:Array<any>;
  show: any;
  constructor(private route: ActivatedRoute, private api: MovieApiService, private router: Router ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe( params => {
      this.api.getMovieShows(params['name']).subscribe(data => {
          this.shows = (<any>data);
        });
    });
    this.get()
  }

  get() {
    this.sub = this.route.params.subscribe( params => {
      this.api.getMovie([params['name']]).subscribe(data => {
          this.movieData = (<any>data);          
        });
    });
  }

  book(show) {
    this.show = show;
  }

}
