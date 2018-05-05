import {Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './guard-route.component.html'
})
export class GuardRouteComponent {

  constructor(private router: Router) {}

  navigateToPreviousRoute() {
    this.router.navigate(['security/auth-guard/example-v1/container-component']);
  }
}
