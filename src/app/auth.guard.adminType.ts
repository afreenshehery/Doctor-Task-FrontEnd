import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { ServiceService } from './service/staff-service/service.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardAdminType implements CanActivate {
  constructor(private authService: ServiceService, private router: Router) {}
  BAckendToken: any = this.authService.getToken;
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (localStorage.getItem('adminType') == 'mainDoctor') {
      return true;
    }

    this.router.navigate(['/']);

    return false;
  }
}
