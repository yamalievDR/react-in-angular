import { Injector } from '@angular/core';
import { PropsWithChildren, createContext, useContext, createElement } from 'react';

const InjectorCtx = createContext<Injector | null>(null);

export function NgContext(props: PropsWithChildren<{ injector: Injector }>) {
  return createElement(InjectorCtx.Provider, {
    children: props.children,
    value: props.injector,
  });
}

export function useInjector(): Injector {
  const injector = useContext(InjectorCtx);

  if (!injector) {
    throw new Error('Missing NgContext');
  }

  return injector;
}
