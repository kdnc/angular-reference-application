import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { KdncECommerceModule } from '../shared/kdncECommerce.module';

import { AsyncLoaderComponent } from './async-loader/async-loader.component';
import { ClickObserverComponent } from './publish-subscribe-model/click-observer.component';

@NgModule({
  imports: [
    CommonModule,
    KdncECommerceModule,
    RouterModule.forChild([
      {
        path: 'async-loader',
        component: AsyncLoaderComponent
      },
      {
        path: 'publish-subscribe',
        component: ClickObserverComponent
      }
    ])
  ],
  declarations: [
    AsyncLoaderComponent,
    ClickObserverComponent
  ],
  providers: []
})
export class ReactiveObservablesModule { }
