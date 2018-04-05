import { Component, AfterViewInit } from '@angular/core';
import { AwsS3UploadService } from '../../shared/services/uploads/aws-s3-upload.service';
import {UploadQueueManager} from "../upload-queue-manager";

@Component({
  templateUrl: './upload-items.component.html'
})
export class UploadItemsComponent implements AfterViewInit {

  constructor(private uploadQueueManager: UploadQueueManager) {

  }

  ngAfterViewInit(): void {

  }

  onSingleFileUpload(event: any) {
    const files: FileList = event.target.files;
    this.uploadQueueManager.enqueueFile(files[0]);
  }

}
