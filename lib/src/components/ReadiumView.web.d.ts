import React from 'react';
import type { ReadiumProps as BaseReadiumProps, ReadiumViewRef as BaseReadiumViewRef } from './ReadiumView.types';
export type ReadiumProps = BaseReadiumProps & {
    height?: number;
    width?: number;
    requestConfig?: RequestInit;
    /**
     * Additional origins/URL prefixes to allow in the per-resource CSP the
     * navigator generates, for publications whose linked resources (CSS,
     * images...) are served from a different host or path than the manifest.
     */
    allowedDomains?: string[];
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
    /**
     * Additional origins/URL prefixes to allow in the per-resource CSP the
     * navigator generates, for publications whose linked resources (CSS,
     * images...) are served from a different host or path than the manifest.
     */
    allowedDomains?: string[];
} & React.RefAttributes<ReadiumViewRef>>;
