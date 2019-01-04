import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../newsapi.service';

@Component({
  selector: 'app-home',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {
  articles: Array<any>;
  constructor(private newsapi:NewsapiService) { }

  ngOnInit() {
    this.newsapi.sports().subscribe(data => this.articles = data['articles']);
  }

}
