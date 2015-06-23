import {
  ComponentAnnotation as Component, 
  ViewAnnotation as View,
  bootstrap
} from 'angular2/angular2';
import {Zippy} from 'zippy';

@Component({
    selector: 'hello'
})
@View({
    template: `<zippy (open)="sayOpen()" (close)="sayClose()" title="Details">
              <p>This is some content.</p>
            </zippy>`,
    directives: [Zippy]
})
export class Hello {
  sayOpen() {
    console.log('open!');
  }

  sayClose() {
    console.log('close!');
  }
}

bootstrap(Hello);
