import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  movies() {
    this.router.navigateByUrl('/movies')
  }

  theats() {
    this.router.navigateByUrl('/theatres')
  }

}
