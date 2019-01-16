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
import { CountryGuard } from './country.guard';
import { SelectComponent } from './select/select.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'select-country',
    pathMatch: 'full'
  },
  {
    path: 'select-country',
    component: SelectComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [CountryGuard]
  },
  {
    path: 'sports',
    component: SportsComponent,
    canActivate: [CountryGuard]
  },
  {
    path: 'business',
    component: BusiComponent,
    canActivate: [CountryGuard]
  },
  {
    path: 'tech',
    component: TechComponent,
    canActivate: [CountryGuard]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SportsComponent,
    BusiComponent,
    TechComponent,
    SelectComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [NewsapiService, CountryGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
