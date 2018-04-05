import { Injectable } from '@angular/core';
import * as AWS from 'aws-sdk/global';
import * as S3 from 'aws-sdk/clients/s3';

@Injectable()
export class AwsS3UploadService {

  FOLDER = '';

  constructor() { }

  uploadFile(file: File) {
    const bucket = new S3(
      {
        accessKeyId: '',
        secretAccessKey: '',
        region: ''
      }
    );

    const params = {
      Bucket: 'kdnc-products',
      Key: this.FOLDER + file.name,
      Body: file
    };

    bucket.upload(params, function (err, data) {
      if (err) {
        console.log('There was an error uploading your file: ', err);
        return false;
      }

      console.log('Successfully uploaded file.', data);
      return true;
    });
  }

}
