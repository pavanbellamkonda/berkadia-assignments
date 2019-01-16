import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MovieApiService } from './movie-api.service';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MoviesViewComponent } from './movies-view/movies-view.component';
import { TheatresViewComponent } from './theatres-view/theatres-view.component';
import { BookingViewComponent } from './booking-view/booking-view.component';
import { MovieShowsComponent } from './movie-shows/movie-shows.component';
import { TheatShowsComponent } from './theat-shows/theat-shows.component';
import { AppRoutingModule } from './app-routing.module';
import { SuccessComponent } from './success/success.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './login.guard';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminMoviesComponent } from './admin-movies/admin-movies.component';
import { AdminTheatresComponent } from './admin-theatres/admin-theatres.component';
import { AdminShowsComponent } from './admin-shows/admin-shows.component';
import { AdminBookingsComponent } from './admin-bookings/admin-bookings.component';
import { BookGuard } from './book.guard';

@NgModule({
  declarations: [
    AppComponent,
    MoviesViewComponent,
    TheatresViewComponent,
    BookingViewComponent,
    MovieShowsComponent,
    TheatShowsComponent,
    SuccessComponent,
    HomeComponent,
    LoginComponent,
    AdminHomeComponent,
    AdminMoviesComponent,
    AdminTheatresComponent,
    AdminShowsComponent,
    AdminBookingsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [MovieApiService, LoginGuard, BookGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
