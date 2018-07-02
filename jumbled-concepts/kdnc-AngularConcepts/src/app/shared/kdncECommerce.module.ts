import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {
  ModalModule
} from 'ngx-bootstrap';

import { KdncLayoutModule } from './layout';

import { KdncEcommerceWidgetsModule } from './widgets/kdncecommerce-widgets.module';

@NgModule({
  imports: [
    CommonModule, FormsModule, RouterModule,
  ],
  declarations: [

  ],
  exports: [
    CommonModule, FormsModule, RouterModule,

    ModalModule,

    KdncLayoutModule,
    KdncEcommerceWidgetsModule
  ]
})
export class KdncECommerceModule {}
