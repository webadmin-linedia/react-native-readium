import { EpubNavigator } from '@readium/navigator';
import { Locator } from '@readium/shared';
import type { ReadiumProps } from '../../src/components/ReadiumView';
interface RefProps extends Pick<ReadiumProps, 'file' | 'onLocationChange' | 'onPublicationReady'> {
    container: HTMLElement | null;
    onPositionChange?: (position: number | null) => void;
    requestConfig?: RequestInit;
    allowedDomains?: string[];
}
export declare const useNavigator: ({ file, onLocationChange, onPublicationReady, container, onPositionChange, requestConfig, allowedDomains, }: RefProps) => {
    navigator: EpubNavigator | null;
    positions: Locator[];
};
export {};
