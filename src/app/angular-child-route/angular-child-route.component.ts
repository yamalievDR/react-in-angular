import { Component, inject, OnInit } from '@angular/core';
import { SomeService } from '../services/some.service';

@Component({
    standalone: true,
    selector: 'ng-child-route-component',
    templateUrl: './angular-child-route.component.html',
    styleUrls: ['./angular-child-route.component.css']
})
export class AngularChildRouteComponent implements OnInit {

    constructor() {
    }

    someService = inject(SomeService)

    ngOnInit(): void {
    }

}
