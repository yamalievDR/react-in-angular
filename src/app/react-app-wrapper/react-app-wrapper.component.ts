import { Component, ElementRef, inject, OnDestroy, OnInit } from '@angular/core';
import { NgReact } from '../services/ng-react.service';
import RouterWrapper from '../react-app/RouterWrapper';
import { AuthService } from '../services/auth.service';
import { interval, ReplaySubject, takeUntil } from 'rxjs';

@Component({
    standalone: true,
    styleUrls: ['./react-app-wrapper.component.scss'],
    template: ``,
})
export class ReactAppWrapperComponent implements OnInit, OnDestroy {
    private ngReact = inject(NgReact);
    private authService = inject(AuthService);
    private root = this.ngReact.createRoot(inject(ElementRef).nativeElement);

    ngOnInit() {
        this.ngReact.render(this.root, RouterWrapper);
        interval(5000).pipe(takeUntil(this.destroy$)).subscribe((c) => {
            this.authService.changeAuth(`${c}`);
        });
    }

    private destroy$ = new ReplaySubject<void>(1);

    ngOnDestroy() {
        this.root.unmount();
        this.destroy$.next();
        this.destroy$.complete();
    }
}
