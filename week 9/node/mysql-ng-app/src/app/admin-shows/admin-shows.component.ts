import { Component, OnInit } from '@angular/core';
import { MovieApiService } from '../movie-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-shows',
  templateUrl: './admin-shows.component.html',
  styleUrls: ['./admin-shows.component.css']
})
export class AdminShowsComponent implements OnInit {

  shows: Array<any>;
  viewMode = 'view'

  show = {
    "movie": '',
    "theatre": '',
    "price": 0,
    "date": '',
    "time": '',
    "tickets_total": 0,
    "tickets_available": 0
  };

  constructor(private api: MovieApiService, private router: Router) { }

  ngOnInit() {
    this.get()
  }

  get() {
    this.api.allShows().subscribe((data) => {
      this.shows = (<any>data);
    })
  }

  delete(movie, theatre, date, time) {
    var d = {
      "movie": movie,
      "theatre": theatre,
      "date": date,
      "time": time
    }
    this.api.deleteShow(d).subscribe(data => {
      this.get()
      this.viewMode = 'view'
    })
  }

  add() {
    if (this.show.movie && this.show.theatre && this.show.date && this.show.price && this.show.time && this.show.tickets_total) {
      this.show.tickets_available = this.show.tickets_total;
      this.api.addShow(this.show).subscribe((data) => {
        this.show = {
          "movie": '',
          "theatre": '',
          "price": 0,
          "date": '',
          "time": '',
          "tickets_total": 0,
          "tickets_available": 0
        };
        this.get()
        alert('Success')
      })
    }
    else {
      alert('Please enter all the data')
    }
  }

}
