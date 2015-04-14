import {Component, View} from 'angular2/angular2';

@Component({
  selector: 'zippy',
  properties: {
    'title': 'title'
  }
})
@View({
  templateUrl: 'zippy.html'
})
export class Zippy {

  constructor() {
    this.visible = true;
  }

  toggle() {
    this.visible = !this.visible;
  }
}
