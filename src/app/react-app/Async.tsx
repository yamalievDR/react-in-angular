import React, { PropsWithChildren, useState, useEffect } from "react";
import { Observable, isObservable, Subscription } from "rxjs";

type AsyncProps<T> = PropsWithChildren<{ observable?: Observable<T>, onChange?: Function }>;

export function Async<T = any>({
                                   observable,
                                   children,
                                   onChange,
                               }: AsyncProps<T>): JSX.Element {
    const [value, setValue] = useState<T | null>(null);

    const setSet = (val: T) => {
        if (onChange) {
            onChange(val);
        }
        setValue(val);
    }

    useEffect(() => {
        let subscription: Subscription;
        if (isObservable(observable)) {
            subscription = observable.subscribe(setSet);
        } else if (isObservable(children)) {
            subscription = (children as Observable<T>).subscribe(setSet);
        }
        return () => subscription?.unsubscribe();
    }, [observable, children]);
    return <>{children}</>;
}
