import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { ProductAddComponent } from './product-add/product-add.component';
import { ProductAddFormComponent } from './product-add/product-add-form/product-add-form.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductEditInfoComponent } from './product-edit-info/product-edit-info.component';
import { ProductEditTagsComponent } from './product-edit-tags/product-edit-tags.component';

import { ProductFilterPipe } from './product-filter.pipe';
import { ProductService } from './product.service';
import { ProductResolver } from './product-resolver.service';
import { ProductEditGuard } from './product-guard.service';

import { KdncECommerceModule } from '../shared/kdncECommerce.module';
import {KdncECommerceValidationModule} from '../shared/forms/validation/kdncecommerce-validation.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    ReactiveFormsModule,
    KdncECommerceValidationModule,
    KdncECommerceModule,
    RouterModule.forChild([
      {
        path: '',
        component: ProductListComponent,
      },
      {
        path: 'add',
        component: ProductAddComponent,
      },
      {
        path: ':id',
        component: ProductDetailComponent,
        resolve: { product: ProductResolver }
      },
      {
        path: ':id/edit',
        component: ProductEditComponent,
        resolve: { product: ProductResolver },
        canDeactivate: [ProductEditGuard],
        children: [
          {
            path: '',
            redirectTo: 'info',
            pathMatch: 'full'
          },
          {
            path: 'info',
            component: ProductEditInfoComponent
          },
          {
            path: 'tags',
            component: ProductEditTagsComponent
          }
        ]
      }
    ])
  ],
  declarations: [
    ProductAddComponent,
    ProductAddFormComponent,
    ProductListComponent,
    ProductDetailComponent,
    ProductEditComponent,
    ProductEditInfoComponent,
    ProductEditTagsComponent,
    ProductFilterPipe
  ],
  providers: [
    ProductService,
    ProductResolver,
    ProductEditGuard
  ]
})
export class ProductModule { }
