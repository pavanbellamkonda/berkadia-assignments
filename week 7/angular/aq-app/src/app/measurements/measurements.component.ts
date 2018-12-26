import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import { AqApiService } from '../aq-api.service';

@Component({
  selector: 'app-measurements',
  templateUrl: './measurements.component.html',
  styleUrls: ['./measurements.component.css']
})
export class MeasurementsComponent implements OnInit {

  meas:Array<any>;
  cName:String;
  selected:String;
  constructor(private api:AqApiService, private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.paramMap.subscribe( (params: ParamMap) =>{
      this.selected = params.get('loc')
      this.api.measures(params.get('loc')).subscribe(data => this.meas = data["results"]);
    });
  }

}
