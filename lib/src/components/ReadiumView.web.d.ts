import React from 'react';
import type { ReadiumProps as BaseReadiumProps, ReadiumViewRef as BaseReadiumViewRef } from './ReadiumView.types';
export type ReadiumProps = BaseReadiumProps & {
    height?: number;
    width?: number;
    requestConfig?: RequestInit;
};
export type ReadiumViewRef = BaseReadiumViewRef & {
    /** @deprecated Use goForward() */
    nextPage: () => void;
    /** @deprecated Use goBackward() */
    prevPage: () => void;
};
export declare const ReadiumView: React.ForwardRefExoticComponent<BaseReadiumProps & {
    height?: number;
    width?: number;
    requestConfig?: RequestInit;
} & React.RefAttributes<ReadiumViewRef>>;
