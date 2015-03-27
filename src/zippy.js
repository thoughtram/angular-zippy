import {Component, Template} from 'angular2/angular2';

@Component({
  selector: 'zippy',
  bind: {
    'title': 'title'
  }
})
@Template({
  url: 'zippy.html'
})
export class Zippy {

  constructor() {
    this.visible = true;
  }

  toggle() {
    this.visible = !this.visible;
  }
}
