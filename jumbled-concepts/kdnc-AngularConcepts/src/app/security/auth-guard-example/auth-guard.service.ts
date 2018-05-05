import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router,
         CanActivate } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { AuthService } from './auth.service';

@Injectable()
export  class AuthGuard implements CanActivate {

    constructor(private router: Router,
                private authService: AuthService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
      const claimType = route.data['claimType'];

      const canAccessGuardedRoute = this.authService.isAuthenticated && this.authService[claimType];
      if (canAccessGuardedRoute) {
        return true;
      } else {
        this.router.navigate(['security/auth-guard/example-v1/redirected-route-component'],
          { queryParams: { returnUrl: state.url } });
        return false;
      }
    }

}
