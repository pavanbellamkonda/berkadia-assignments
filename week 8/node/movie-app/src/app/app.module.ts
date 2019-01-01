import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MovieApiService } from './movie-api.service';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import { MovieComponent } from './movie/movie.component';

const routes: Routes = [
  {
    path: 'movies',
    redirectTo: '',
    pathMatch: 'full',
    children: [
      {path: ':name', component: MovieComponent}
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [MovieApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
