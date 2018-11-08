import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ConfigService, configurationServiceInitializerFactory } from './config/config.service';

/*
Kdnc Step
https://robinraju.github.io/developer/2017-11-14-loading-external-config-in-angular/
https://gist.github.com/fernandohu/122e88c3bcd210bbe41c608c36306db9
*/

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    ConfigService,
    /* Kdnc Step 1
    First line will make ConfigService class available to Angular2.
    The second line uses APP_INITIALIZER to execute ConfigService.load() method before application startup.
    The 'multi: true' is being used because an application can have more than one line of APP_INITIALIZER.
    */
    {
      provide: APP_INITIALIZER,
      useFactory: configurationServiceInitializerFactory,
      deps: [ ConfigService ] ,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
