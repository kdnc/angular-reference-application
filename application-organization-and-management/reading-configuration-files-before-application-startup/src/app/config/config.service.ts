import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/of';
import { GlobalItems } from '../shared/utilities/global-items';

// Kdnc Step 2
export function configurationServiceInitializerFactory(configurationService: ConfigService): Function {
  return () => configurationService.load();
}

@Injectable()
export class ConfigService {

  private loaded = false;
  private configuration: any;

  constructor(private http: HttpClient) {
  }

  // Kdnc Step 3
  public load(): Promise<any> {
    // The return value (Promise) of this method is used as an APP_INITIALIZER,
    // so the application's initialization will not complete until the Promise resolves.
    return new Promise((resolve, reject) => {
      if (this.loaded) {
        resolve(true);
      } else {
        // Path is relative to that for app's index.html
        this.http.get(`config.json`)
          .catch(() => {
            resolve(true);
            return Observable.empty();
          })
          .subscribe(config => {
            // Kdnc Step 4
            this.configuration = config;
            GlobalItems.setConfiguration(this.configuration);
            this.loaded = true;
            resolve(true);
          });
      }
    });
  }
}
