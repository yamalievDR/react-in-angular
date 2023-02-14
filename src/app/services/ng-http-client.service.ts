import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { NgHttpClient } from '../shared/http-client.provider';

@Injectable()
export class NgHttpClientService implements NgHttpClient {
    private httpClient = inject(HttpClient);

    public get<T>(path: string): Promise<T> {
        return this.httpClient.get<T>(path).toPromise();
    }

    public post<T, B>(path: string, body: B, ...args): Promise<T> {
        return this.httpClient.post<T>(path, body).toPromise();
    }

    public put<T, B>(path: string, body: B, ...args): Promise<T> {
        return this.httpClient.put<T>(path, body).toPromise();
    }
}
