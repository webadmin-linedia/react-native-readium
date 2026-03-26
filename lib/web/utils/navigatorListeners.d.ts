import { EpubNavigatorListeners } from '@readium/navigator';
import { Locator } from '@readium/shared';
/**
 * Creates navigator listeners for handling navigation events
 */
export declare function createNavigatorListeners(onLocationChangeWithTotalProgression: (locator: Locator) => void, onPositionChange?: (position: number | null) => void): EpubNavigatorListeners;
