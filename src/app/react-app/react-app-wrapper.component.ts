import { Component, ElementRef, inject, OnDestroy, OnInit } from '@angular/core';
import { NgReact } from './ng-react.service';
import RouterWrapper from './RouterWrapper';

@Component({
    standalone: true,
    template: ``,
})
export class ReactAppWrapperComponent implements OnInit, OnDestroy {
    private ngReact = inject(NgReact);
    private root = this.ngReact.createRoot(inject(ElementRef).nativeElement);

    ngOnInit() {
        this.ngReact.render(this.root, RouterWrapper);
    }

    ngOnDestroy() {
        this.root.unmount();
    }
}
