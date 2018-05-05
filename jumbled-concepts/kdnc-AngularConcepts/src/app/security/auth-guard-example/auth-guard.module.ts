import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { KdncECommerceModule } from '../../shared/kdncECommerce.module';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';
import { RedirectedRouteComponent } from './redirected-route-component/redirected-route.component';
import { ContainerComponent } from './container-component/container.component';
import { GuardRouteComponent } from './guarded-route-component/guard-route.component';

@NgModule({
  imports: [
    CommonModule,
    KdncECommerceModule,
    RouterModule.forChild([
      {
        path: 'container-component',
        component: ContainerComponent
      },
      {
        path: 'guarded-route-component',
        component: GuardRouteComponent,
        canActivate: [AuthGuard],
        data: { claimType: 'canAccessProducts' }
      },
      {
        path: 'redirected-route-component',
        component: RedirectedRouteComponent
      },
    ])
  ],
  declarations: [
    ContainerComponent,
    GuardRouteComponent,
    RedirectedRouteComponent
  ],
  providers: [
    AuthService,
    AuthGuard
  ]
})
export class AuthGuardModule { }
