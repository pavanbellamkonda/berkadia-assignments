import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../newsapi.service';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';


@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  constructor(private api: NewsapiService, private router: Router) { }

  ngOnInit() {
  }

  india() {
    this.api.setLanguage('in');
    this.router.navigateByUrl('/home');
  }

  usa() {
    this.api.setLanguage('us');
    this.router.navigateByUrl('/home')
  }

}
