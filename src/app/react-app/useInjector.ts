import { createContext, createElement, PropsWithChildren, useContext } from 'react';

const InjectorCtx = createContext<NgInjector | null>(null);

export function NgContext(props: PropsWithChildren<{ injector: NgInjector }>) {
    return createElement(InjectorCtx.Provider, {
        children: props.children,
        value: props.injector,
    });
}

export interface Type<T> extends Function {
    new (...args: any[]): T;
}

export interface NgInjector extends Object {
    get<T>(token: Type<T>): T
}

export function useInjector(): NgInjector {
    const injector = useContext(InjectorCtx);

    if (!injector) {
        throw new Error('Missing NgContext');
    }

    return injector;
}
