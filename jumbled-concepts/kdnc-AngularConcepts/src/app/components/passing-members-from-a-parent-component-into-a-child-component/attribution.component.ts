import {Component, Input} from '@angular/core';

@Component({
  selector: 'kdnc-attribution',
  templateUrl: 'attribution.component.html'
})
export class AttributionComponent {
  @Input() author;
}
