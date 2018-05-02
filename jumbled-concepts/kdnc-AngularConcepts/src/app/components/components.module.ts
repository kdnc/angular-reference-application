import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { KdncECommerceModule } from '../shared/kdncECommerce.module';

import { ArticleComponent as ArticleComponent1 } from './using-decorators-to-build-and-style-a-simple-component/article.component';
import { ArticleComponent as ArticleComponent2 } from './passing-members-from-a-parent-component-into-a-child-component/article.component';
import { AttributionComponent as AttributionComponent1 } from './passing-members-from-a-parent-component-into-a-child-component/attribution.component';

@NgModule({
  imports: [
    CommonModule,
    KdncECommerceModule,
    RouterModule.forChild([
      {
        path: 'using-decorators-to-build-and-style-a-simple-component',
        component: ArticleComponent1
      },
      {
        path: 'passing-members-from-a-parent-component-into-a-child-component',
        component: ArticleComponent2
      }
    ])
  ],
  declarations: [
    ArticleComponent1,
    ArticleComponent2,
    AttributionComponent1
  ],
  providers: []
})
export class ComponentsModule { }
