import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { KdncECommerceModule } from '../../shared/kdncECommerce.module';
import { KdncECommerceValidationModule } from '../../shared/forms/validation/kdncecommerce-validation.module';
import { SharedModule } from '../../shared/shared.module';

import { ProductSearchComponent } from './product-search/product-search.component';
import { ProductListComponent } from './product-search/product-list/product-list.component';

@NgModule({
  imports: [
    SharedModule,
    ReactiveFormsModule,
    KdncECommerceValidationModule,
    KdncECommerceModule,
    RouterModule.forChild([
      {
        path: 'list',
        component: ProductSearchComponent,
      }
    ])
  ],
  declarations: [
    ProductSearchComponent,
    ProductListComponent
  ],
  providers: [
  ]
})
export class ProductModule { }
