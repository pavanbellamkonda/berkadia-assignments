import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MovieApiService } from './movie-api.service';

@Injectable({
  providedIn: 'root'
})
export class BookGuard implements CanActivate {

  constructor(private api: MovieApiService, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if(!this.api.isBooked()) {
        this.router.navigateByUrl('/start');
        return false;
      }
      return true;  
  }
}
