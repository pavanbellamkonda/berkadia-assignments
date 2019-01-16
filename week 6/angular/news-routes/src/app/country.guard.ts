import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { NewsapiService } from './newsapi.service';

@Injectable()
export class CountryGuard implements CanActivate {

  constructor(private api: NewsapiService, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    
    if (!this.api.isSelected()) {
      this.router.navigateByUrl('/select-country');
      return false;
    }

    return true;
  }
}
