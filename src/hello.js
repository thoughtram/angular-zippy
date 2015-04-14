import {Component, View, bootstrap} from 'angular2/angular2';
import {Zippy} from 'zippy';

@Component({
    selector: 'hello'
})
@View({
    template: `<zippy title="Details">
              <p>This is some content.</p>
            </zippy>`,
    directives: [Zippy]
})
export class Hello {

}

bootstrap(Hello);
