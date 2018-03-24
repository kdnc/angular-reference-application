import { InjectionToken } from '@angular/core';

export let GLOBALS = new InjectionToken('globals');

export const GlobalValues = {
  services: {
    productService: 'http://localhost:7002/api',
  },
  endpoints: {
    products: 'product',
  }
};
