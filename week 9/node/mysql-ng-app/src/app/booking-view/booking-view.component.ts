import { Component, Input, OnInit } from '@angular/core';
import { MovieApiService } from '../movie-api.service';
import { Show } from '../show';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';


@Component({
  selector: 'app-booking-view',
  templateUrl: './booking-view.component.html',
  styleUrls: ['./booking-view.component.css']
})
export class BookingViewComponent implements OnInit {
  @Input() show: any;
  @Input() source: any;
  back: Array<any>;
  book: Array<number>;
  count: number;
  resp: any;
  user_name: string;

  constructor(private api: MovieApiService, private router: Router) { }

  ngOnInit() {
    if (this.source == 'movie') {
      this.back = ['/movie', this.show.movie]
    }
    else {
      this.back = ['/theatre', this.show.theatre]
    }

    if (this.show.tickets_available >= 6) {
      this.book = [1];
      for (var i = 2; i <= 6; i++) {
        this.book.push(i);
      }
    }
    else {
      this.book = [1];
      for (var i = 2; i <= this.show.tickets_available; i++) {
        this.book.push(i);
      }
    }
  }

  getCount(count) {
    this.count = count;
    if(this.user_name)
      this.api.setBooked();
  }

  bookShow() {
    if (this.count && this.user_name) {
      const show = {
        "name": this.user_name,
        "movie": this.show.movie,
        "theatre": this.show.theatre,
        "date": this.show.date,
        "time": this.show.time,
        "count": this.count
      };
      this.api.postBook(show).subscribe((data) => {
        this.router.navigateByUrl('/success')
      })
    }
    else {
      alert('Select number of tickets and enter user name')
    }
  }

}
