import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import { AqApiService } from '../aq-api.service';


@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {

  cities: Array<any>;
  visible: Boolean;
  constructor(private api: AqApiService, private router: ActivatedRoute, private route: Router) { }

  ngOnInit() {
    this.router.paramMap.subscribe( (params: ParamMap) => {
      this.api.cities(params.get('id')).subscribe(data => {
          this.cities = data['results'];
          this.visible = (this.route.url.split('/').length === 2);
        });
    });
  }

}
