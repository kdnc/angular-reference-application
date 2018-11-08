import { Component } from '@angular/core';
import { GlobalItems } from './shared/utilities/global-items';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public webAppUrl = GlobalItems.endpoints.webAppUrl;

}
