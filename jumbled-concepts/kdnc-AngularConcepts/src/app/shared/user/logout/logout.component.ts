import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

declare var $: any;

@Component({
  selector: 'kdnc-logout',
  template: `
<div id="logout" (click)="showPopup()" class="btn-header transparent pull-right">
        <span> <a routerlink="/auth/login" title="Sign Out" data-action="userLogout"
                  data-logout-msg="You can improve your security further after logging out by closing this opened browser"><i
          class="fa fa-sign-out"></i></a> </span>
    </div>
  `,
  styles: []
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router) { }

  showPopup() {
  }

  logout() {
      this.router.navigate(['/auth/login']);
  }

  ngOnInit() {

  }



}
