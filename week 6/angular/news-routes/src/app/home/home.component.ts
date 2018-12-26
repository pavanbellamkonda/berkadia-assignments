import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../newsapi.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  articles:Array<any>;
  constructor(private newsapi:NewsapiService) { }

  ngOnInit() {
    this.newsapi.home().subscribe(data => this.articles = data['articles']);
  }

}
