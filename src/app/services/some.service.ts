import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class SomeService {

    #counter$ = new BehaviorSubject(0);

    get counter$() {
        return this.#counter$.asObservable()
    }

    increment() {
        this.#counter$.next(this.#counter$.value + 1)
    }

    decrement() {
        this.#counter$.next(this.#counter$.value - 1)
    }
}
