import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthGuard } from './user/auth-guard.service';
import { SelectiveStrategy } from './selective-strategy.service';

import { WelcomeComponent } from './home/welcome.component';
import { MainLayoutComponent } from './shared/layout/app-layouts/main-layout.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
          { path: '',
            component: MainLayoutComponent,
            children: [
              {
                path: '', redirectTo: 'home', pathMatch: 'full',
              },
              { path: 'home', component: WelcomeComponent },
              {
                path: 'products',
                canActivate: [ AuthGuard ],
                data: { preload: true },
                loadChildren: 'app/products/product.module#ProductModule'
              },
              {
                path: 'reactive-forms',
                data: { preload: true },
                loadChildren: 'app/forms/reactive-forms/reactive-forms.module#ReactiveFormModule'
              },
              {
                path: 'async-loader',
                data: { preload: true },
                loadChildren: 'app/loader/async-loader.module#AsyncLoaderModule'
              },
            ]
          },
          { path: '**', redirectTo: 'home' }
        ], { preloadingStrategy: SelectiveStrategy }) // , { enableTracing: true })
    ],
    providers: [ SelectiveStrategy ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }
