import { Component, OnInit } from '@angular/core';
import { MovieApiService } from '../movie-api.service';

@Component({
  selector: 'app-theatres-view',
  templateUrl: './theatres-view.component.html',
  styleUrls: ['./theatres-view.component.css']
})
export class TheatresViewComponent implements OnInit {
  names:Array<any>;
  constructor(private api: MovieApiService) { }
  theats:Array<any>;

  ngOnInit() {
    this.api.allTheats().subscribe(data => { 
      this.names = (<any>data)
      this.get()
    })
  }

  get() {
    this.api.getTheat(this.names).subscribe(data => this.theats = (<any>data))
  }
}
