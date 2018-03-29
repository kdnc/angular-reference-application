import { Component, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Component({
  templateUrl: './click-observer.component.html'
})
export class ClickObserverComponent {

  clickEmitter: Observable<Event>;

  private clickSubject_: Subject<Event> = new Subject();

  clicks: Array<Event> = [];

  constructor() {
    this.clickEmitter = this.clickSubject_.asObservable();
    this.clickEmitter.subscribe(clickEvent =>
      this.clicks.push(clickEvent));
  }

  publish(e: Event) {
    this.clickSubject_.next(e);
  }

}
