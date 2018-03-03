import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AsyncLoaderComponent } from './async-loader.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: AsyncLoaderComponent
      }
    ])
  ],
  declarations: [
    AsyncLoaderComponent
  ],
  providers: []
})
export class AsyncLoaderModule { }