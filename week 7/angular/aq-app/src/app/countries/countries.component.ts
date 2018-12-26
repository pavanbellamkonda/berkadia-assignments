import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { AqApiService } from '../aq-api.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  countries:Array<any>;

  constructor(private api:AqApiService, private router: ActivatedRoute,
    private route: Router) { }

  ngOnInit(){
    this.api.countries().subscribe(data => this.countries = data["results"]);
  }
}
