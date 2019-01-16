import { Component, OnInit } from '@angular/core';
import { MovieApiService } from '../movie-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-bookings',
  templateUrl: './admin-bookings.component.html',
  styleUrls: ['./admin-bookings.component.css']
})
export class AdminBookingsComponent implements OnInit {

  bookings: Array<any>;

  constructor(private api: MovieApiService, private router: Router) { }

  ngOnInit() {
    this.get()
  }

  get() {
    this.api.allBookings().subscribe((data) => {
      this.bookings = (<any>data);
    })
  }

  refresh() {
    this.get()
  }

}
