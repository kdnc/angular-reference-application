import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { configurationServiceInitializerFactory, ConfigService } from './config.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: []
})
export class ConfigModule { }
export { configurationServiceInitializerFactory, ConfigService };
