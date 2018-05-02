import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { KdncECommerceModule } from '../shared/kdncECommerce.module';

import { ArticleComponent } from './using-decorators-to-build-and-style-a-simple-component/article.component';

@NgModule({
  imports: [
    CommonModule,
    KdncECommerceModule,
    RouterModule.forChild([
      {
        path: 'using-decorators-to-build-and-style-a-simple-component',
        component: ArticleComponent
      }
    ])
  ],
  declarations: [
    ArticleComponent
  ],
  providers: []
})
export class ComponentsModule { }
