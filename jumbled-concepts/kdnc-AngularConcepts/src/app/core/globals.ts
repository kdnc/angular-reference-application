import { InjectionToken } from '@angular/core';
import { environment } from '../../environments/environment';

export let GLOBALS = new InjectionToken('globals');

export const GlobalValues = {
  services: {
    productService: environment.apiUrl,
  },
  endpoints: {
    products: 'product',
  }
};
