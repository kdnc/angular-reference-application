import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { KdncECommerceModule } from '../shared/kdncECommerce.module';

import { UploadItemsComponent } from './upload-items/upload-items.component';
import { AwsS3UploadService } from '../shared/services/uploads/aws-s3-upload.service';
import { UploadQueueManager } from './upload-queue-manager';

@NgModule({
  imports: [
    CommonModule,
    KdncECommerceModule,
    RouterModule.forChild([
      {
        path: 'upload-items',
        component: UploadItemsComponent
      },
    ])
  ],
  declarations: [
    UploadItemsComponent
  ],
  providers: [
    AwsS3UploadService,
    UploadQueueManager
  ]
})
export class UploadsModule { }
