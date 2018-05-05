import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
    isAuthenticated = false;
    canAccessProducts = false;

    constructor() {  }

    setIsAuthenticated(isAuthenticated) {
      this.isAuthenticated = isAuthenticated;
    }

    setCanAccessProducts(canAccessProducts) {
      this.canAccessProducts = canAccessProducts;
    }

}
