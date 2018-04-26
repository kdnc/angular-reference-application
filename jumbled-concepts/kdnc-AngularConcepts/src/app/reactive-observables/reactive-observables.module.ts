import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { KdncECommerceModule } from '../shared/kdncECommerce.module';

import { AsyncLoaderComponent } from './async-loader/async-loader.component';
import { ClickObserverComponent } from './publish-subscribe-model/click-observer.component';
import { TakeUntilExamplesComponent } from './takeUntil-examples/takeUntil-examples.component';

@NgModule({
  imports: [
    CommonModule,
    KdncECommerceModule,
    RouterModule.forChild([
      {
        path: 'take-until-example',
        component: TakeUntilExamplesComponent
      },
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
    ClickObserverComponent,
    TakeUntilExamplesComponent
  ],
  providers: []
})
export class ReactiveObservablesModule { }
