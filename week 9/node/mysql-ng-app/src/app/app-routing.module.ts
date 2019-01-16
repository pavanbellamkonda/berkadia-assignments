import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MovieShowsComponent } from './movie-shows/movie-shows.component';
import { TheatresViewComponent } from './theatres-view/theatres-view.component';
import { MoviesViewComponent } from './movies-view/movies-view.component';
import { TheatShowsComponent } from './theat-shows/theat-shows.component';
import { BookingViewComponent } from './booking-view/booking-view.component';
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

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'start',
    component: HomeComponent
  },
  {
    path: 'movies',
    component: MoviesViewComponent
  },
  {
    path: 'theatres',
    component: TheatresViewComponent
  },
  {
    path: 'admin-home',
    component: AdminHomeComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'admin-movies',
    component: AdminMoviesComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'admin-theatres',
    component: AdminTheatresComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'admin-shows',
    component: AdminShowsComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'admin-bookings',
    component: AdminBookingsComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'movie/:name',
    component: MovieShowsComponent
  },
  {
    path: 'theatre/:name',
    component: TheatShowsComponent
  },
  {
    path: 'success',
    component: SuccessComponent,
    canActivate: [BookGuard]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
