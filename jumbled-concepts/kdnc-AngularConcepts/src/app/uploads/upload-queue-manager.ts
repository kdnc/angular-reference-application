import { Injectable, HostListener, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AwsS3UploadService } from '../shared/services/uploads/aws-s3-upload.service';
import {FileQueue} from "./file-queue";

/**
 * Manages upload queue related operations.
 */
@Injectable()

export class UploadQueueManager {

  private uploadQueue: FileQueue<File>;
  private files: File[] = [];
  private currentFile: File;

  constructor(private awsS3UploadService: AwsS3UploadService) {
    this.uploadQueue = new FileQueue();
  }

  enqueueFile(file: File): void {
    this.uploadQueue.push(file);
    this.files.push(file);
    this.startUpload();
  }

  private startUpload(): void {
    this.currentFile = this.getNextFileToUpload();
    this.awsS3UploadService.uploadFile(this.currentFile);
  }

  getNextFileToUpload(): File {
    return this.uploadQueue.pop();
  }

}
