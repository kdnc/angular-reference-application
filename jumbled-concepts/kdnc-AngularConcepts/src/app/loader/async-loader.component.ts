import { Component, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  templateUrl: './async-loader.component.html'
})
export class AsyncLoaderComponent implements AfterViewInit {
  myObservable: Observable<any>;
  ngAfterViewInit(): void {
    this.initObservable();
  }
  initObservable() {
    this.myObservable = null;
    this.myObservable = Observable.create( observer => {
      setTimeout( () => {
        observer.next({'id' : 123});
      }, 2000);
    });
  }
}
