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
                path: 'product',
                data: { preload: true },
                loadChildren: 'app/catalog/products/product.module#ProductModule'
              },
              {
                path: 'products2',
                data: { preload: true },
                loadChildren: 'app/products/product.module#ProductModule'
              },
              {
                path: 'reactive-observables',
                data: { preload: true },
                loadChildren: 'app/reactive-observables/reactive-observables.module#ReactiveObservablesModule'
              },
              {
                path: 'uploads',
                data: { preload: true },
                loadChildren: 'app/uploads/uploads.module#UploadsModule'
              },
              {
                path: 'components',
                data: { preload: true },
                loadChildren: 'app/components/components.module#ComponentsModule'
              },
              {
                path: 'security/auth-guard/example-v1',
                data: { preload: true },
                loadChildren: 'app/security/auth-guard-example/auth-guard.module#AuthGuardModule'
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
