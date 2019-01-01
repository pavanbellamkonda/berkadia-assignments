import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import { MovieApiService } from '../movie-api.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  constructor(private api: MovieApiService, private router: ActivatedRoute) { }

  obj: Object;

  ngOnInit() {
    this.router.paramMap.subscribe((params: ParamMap) => {
      this.api.movieData(params.get('name')).subscribe(data => this.obj = data);
    });
  }

}
