import { Component, OnInit } from '@angular/core';
import { MovieApiService } from '../movie-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private api: MovieApiService, private router: Router) { }

  ngOnInit() {
  }

  logInUser() {
    this.api.logInUser();
    this.router.navigateByUrl('/start')
  }

  logInAdmin() {
    this.api.logInAdmin();
    this.router.navigateByUrl('/admin-home')
  }

  

}
