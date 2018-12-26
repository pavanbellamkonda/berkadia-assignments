import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { AqApiService } from './aq-api.service';
import { CountriesComponent } from './countries/countries.component';
import { LocationsComponent } from './locations/locations.component';
import { MeasurementsComponent } from './measurements/measurements.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: CountriesComponent
  },
  {
    path: ':id',
    component: LocationsComponent,
    children:[
      {path: ':loc', component: MeasurementsComponent}
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    CountriesComponent,
    LocationsComponent,
    MeasurementsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AqApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
