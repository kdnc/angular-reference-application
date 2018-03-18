import { InjectionToken } from '@angular/core';

export let GLOBALS = new InjectionToken('globals');

export const GlobalValues = {
  services: {
    productService: 'productservice',
  },
  endpoints: {
    products: 'products',
  }
};
