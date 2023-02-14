import { Injectable } from '@angular/core';
import { ReplaySubject, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {

    #token$ = new ReplaySubject<string>(1);

    private lastToken: string;

    get token$() {
        return this.#token$.asObservable().pipe(tap(v => {
            this.lastToken = v;
        }));
    }

    changeAuth(token?: string) {
        if (token) {
            this.#token$.next(token);
        } else {
            console.log('[LOG] external change token');
        }
    }
}
