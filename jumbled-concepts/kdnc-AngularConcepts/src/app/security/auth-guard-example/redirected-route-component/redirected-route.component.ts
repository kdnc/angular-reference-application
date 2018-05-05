import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  templateUrl: './redirected-route.component.html'
})
export class RedirectedRouteComponent implements OnInit {

  returnUrl: string;

  constructor(private authService: AuthService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
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

  retryToNavigateToReturnUrl() {
    this.router.navigateByUrl(this.returnUrl);
  }
}
