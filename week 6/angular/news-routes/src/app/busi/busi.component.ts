import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../newsapi.service';

@Component({
  selector: 'app-home',
  templateUrl: './busi.component.html',
  styleUrls: ['./busi.component.css']
})
export class BusiComponent implements OnInit {
  articles:Array<any>;
  constructor(private newsapi:NewsapiService) { }

  ngOnInit() {
    this.newsapi.busi().subscribe(data => this.articles = data['articles']);
  }

}
