import {Component} from '@angular/core';

declare var $: any;

@Component({
  selector: 'kdnc-minify-menu',
  template: `<span class="minifyme" (click)="toggle()">
    <i class="fa fa-arrow-circle-left hit"></i>
</span>`,
})
export class MinifyMenuComponent {

  constructor() {
  }

  toggle() {
  }
}
