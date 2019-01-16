import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieApiService } from '../movie-api.service';
import { BookingViewComponent } from '../booking-view/booking-view.component';

@Component({
  selector: 'app-theat-shows',
  templateUrl: './theat-shows.component.html',
  styleUrls: ['./theat-shows.component.css']
})
export class TheatShowsComponent implements OnInit {

  shows:Array<any>;
  private sub: any;
  theatData:Array<any>;
  show: any;
  constructor(private route: ActivatedRoute, private api: MovieApiService, private router: Router ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe( params => {
      this.api.getTheatShows(params['name']).subscribe(data => {
          this.shows = (<any>data);
        });
    });
    this.get()
  }

  get() {
    this.sub = this.route.params.subscribe( params => {
      this.api.getTheat([params['name']]).subscribe(data => {
          this.theatData = (<any>data);          
        });
    });
  }

  book(show) {
    this.show = show;
  }

}
