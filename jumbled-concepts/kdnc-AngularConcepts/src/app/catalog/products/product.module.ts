import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { TabsModule } from 'ngx-bootstrap';

import { KdncECommerceModule } from '../../shared/kdncECommerce.module';
import { KdncECommerceValidationModule } from '../../shared/forms/validation/kdncecommerce-validation.module';
import { SharedModule } from '../../shared/shared.module';

import { ProductSearchComponent } from './product-search/product-search.component';
import { ProductListComponent } from './product-search/product-list/product-list.component';
import { ProductAddComponent } from './product-add/product-add.component';

@NgModule({
  imports: [
    SharedModule,
    ReactiveFormsModule,
    KdncECommerceValidationModule,
    KdncECommerceModule,
    TabsModule.forRoot(),
    RouterModule.forChild([
      {
        path: 'list',
        component: ProductSearchComponent,
      },
      {
        path: 'create',
        component: ProductAddComponent,
      }
    ])
  ],
  declarations: [
    ProductSearchComponent,
    ProductListComponent,
    ProductAddComponent
  ],
  providers: [
  ]
})
export class ProductModule { }
