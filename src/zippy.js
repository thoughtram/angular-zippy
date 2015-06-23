import {
  ComponentAnnotation as Component,
  ViewAnnotation as View,
  EventEmitter
} from 'angular2/angular2';

@Component({
  selector: 'zippy',
  events: ['open', 'close'],
  properties: ['title']
})
@View({
  templateUrl: 'zippy.html'
})
export class Zippy {

  constructor() {
    this.visible = true;
    this.open = new EventEmitter();
    this.close = new EventEmitter();
  }

  toggle() {
    this.visible = !this.visible;
    (this.visible) ? this.open.next() : this.close.next();
  }
}
