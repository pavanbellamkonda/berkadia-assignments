import { Component, OnInit } from '@angular/core';
import { MovieApiService } from '../movie-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-theatres',
  templateUrl: './admin-theatres.component.html',
  styleUrls: ['./admin-theatres.component.css']
})
export class AdminTheatresComponent implements OnInit {

  names: Array<any>;
  constructor(private api: MovieApiService, private router: Router) { }
  theatres: Array<any>;

  viewMode = 'view'

  theatre = {
    "name": '',
    "image": '',
    "location": '',
    "pin": 0
  };

  ngOnInit() {
    this.getNames()
  }

  getNames() {
    this.api.allTheats().subscribe(data => {
      this.names = (<any>data)
      this.get()
    })
  }

  get() {
    this.api.getTheat(this.names).subscribe(data => this.theatres = (<any>data))
  }

  delete(name) {
    this.api.deleteTheatre(name).subscribe(data => {
      this.getNames()
      this.viewMode = 'view'
    })
  }

  add() {
    if (this.theatre.image && this.theatre.name && this.theatre.pin && this.theatre.location) {
      this.api.addTheatre(this.theatre).subscribe((data) => {
        this.theatre = {
          "name": '',
          "image": '',
          "location": '',
          "pin": 0
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
