import { Component } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private router: ActivatedRoute,
    private route: Router){
    console.log('app component constructor called');         
  }
  ngOnInit() {
    
  }
  goHome() {
    this.route.navigate(['home'], { relativeTo: this.router});
  }

  goSports() {
    this.route.navigate(['sports'], { relativeTo: this.router});
  }

  goBusi() {
    this.route.navigate(['business'], { relativeTo: this.router});
  }

  goTech(){
    this.route.navigate(['tech'], { relativeTo: this.router});
  }
}
