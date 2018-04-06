import { Component, AfterViewInit, ChangeDetectorRef  } from '@angular/core';
import { UploadQueueManager } from '../upload-queue-manager';

@Component({
  templateUrl: './upload-items.component.html',
  styleUrls: ['upload-items.component.scss']
})
export class UploadItemsComponent implements AfterViewInit {

  corsConfigurationCodeBlock: string;

  constructor(private cdRef: ChangeDetectorRef,
              private uploadQueueManager: UploadQueueManager) {
  }

  ngAfterViewInit(): void {
    const corsConfigurationCode =
    `
      <CORSConfiguration>
        <CORSRule>
          <AllowedOrigin>*</AllowedOrigin>
          <AllowedMethod>GET</AllowedMethod>
          <AllowedMethod>PUT</AllowedMethod>
          <AllowedMethod>POST</AllowedMethod>
          <AllowedMethod>DELETE</AllowedMethod>
          <MaxAgeSeconds>3000</MaxAgeSeconds>
          <AllowedHeader>Authorization</AllowedHeader>
        </CORSRule>
    </CORSConfiguration>`;
    this.corsConfigurationCodeBlock = Prism.highlight(corsConfigurationCode, Prism.languages.xml);

    // https://stackoverflow.com/questions/39787038/how-to-manage-angular2-expression-has-changed-after-it-was-checked-exception-w
    // https://blog.angularindepth.com/everything-you-need-to-know-about-the-expressionchangedafterithasbeencheckederror-error-e3fd9ce7dbb4
    this.cdRef.detectChanges();
  }

  onSingleFileUpload(event: any) {
    const files: FileList = event.target.files;
    this.uploadQueueManager.enqueueFile(files[0]);
  }

}
