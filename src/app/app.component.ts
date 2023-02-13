import { Component, inject, VERSION } from '@angular/core';
import { SomeService } from './services/some.service';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    name = 'Angular ' + VERSION.major;

    count$ = inject(SomeService).counter$;
}
