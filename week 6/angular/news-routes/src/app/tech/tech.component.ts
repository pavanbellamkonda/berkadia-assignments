import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../newsapi.service';

@Component({
  selector: 'app-home',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.css']
})
export class TechComponent implements OnInit {
  articles:Array<any>;
  constructor(private newsapi:NewsapiService) { }

  ngOnInit() {
    this.newsapi.tech().subscribe(data => this.articles = data['articles']);
  }

}
