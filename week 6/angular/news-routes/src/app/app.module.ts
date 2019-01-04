import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NewsapiService } from './newsapi.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SportsComponent } from './sports/sports.component';
import { BusiComponent } from './busi/busi.component';
import { TechComponent } from './tech/tech.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'sports',
    component: SportsComponent
  },
  {
    path: 'business',
    component: BusiComponent
  },
  {
    path: 'tech',
    component: TechComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SportsComponent,
    BusiComponent,
    TechComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [NewsapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
