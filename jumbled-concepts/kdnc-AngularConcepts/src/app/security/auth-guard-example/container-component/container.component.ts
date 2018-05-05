import {Component} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'kdnc-container',
  templateUrl: './container.component.html'
})
export class ContainerComponent {

  constructor(private authService: AuthService,
              private router: Router) {

  }

  toggleCanAccessProducts() {
    this.authService.setCanAccessProducts(!this.authService.canAccessProducts);
  }

  toggleIsAuthenticated() {
    this.authService.setIsAuthenticated(!this.authService.isAuthenticated);
  }

  getCanAccessProductsValue(): boolean {
    return this.authService.canAccessProducts;
  }

  getIsAuthenticatedValue(): boolean {
    return this.authService.isAuthenticated;
  }

  navigateToGuardedRoute() {
    this.router.navigate(['security/auth-guard/example-v1/guarded-route-component']);
  }
}
