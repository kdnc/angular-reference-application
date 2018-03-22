import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { GlobalValues } from '../../../core/globals';
import { ResourceService } from '../resource.service';
import { Product, QueryOptions } from '../../models/domain';
import { ProductSerializer } from './product.serializer';

@Injectable()
export class ProductService extends ResourceService<Product> {
  serializer = new ProductSerializer();

  constructor(httpClient: HttpClient) {
    super(
      httpClient,
      GlobalValues.services.productService,
      GlobalValues.endpoints.products,
      new ProductSerializer());
  }

  getProducts(): Observable<Product[]> {
    return super.list(new QueryOptions())
      .map((products) => products);
  }

  // saveProduct(product: Product): Observable<Product> {
    // const headers = new Headers({ 'Content-Type': 'application/json' });
    // const options = new RequestOptions({ headers: headers });
    //
    // if (product.id === 0) {
    //   return this.createProduct(product, options);
    // }
    // return this.updateProduct(product, options);
  // }
}
