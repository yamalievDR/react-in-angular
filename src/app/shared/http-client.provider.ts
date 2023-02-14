export const HTTP_CLIENT = 'HTTP_CLIENT';

export interface NgHttpClient {
    get<T>(path: string, ...args): Promise<T>;
    post<T, B>(path: string, body: B, ...args): Promise<T>;
    put<T, B>(path: string, body: B, ...args): Promise<T>;
}
