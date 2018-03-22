import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BootstrapValidatorDirective} from './bootstrap-validator.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BootstrapValidatorDirective
  ],
  exports: [
    BootstrapValidatorDirective
  ]
})
export class KdncECommerceValidationModule { }
