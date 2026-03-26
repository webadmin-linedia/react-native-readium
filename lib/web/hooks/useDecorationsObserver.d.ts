import type { EpubNavigator } from '@readium/navigator';
import type { DecorationGroups, DecorationActivatedEvent } from '../../src/interfaces';
/**
 * Hook to observe and apply decorations to the navigator
 */
export declare const useDecorationsObserver: (navigator: EpubNavigator | null, decorations: DecorationGroups | undefined, onDecorationActivated?: (event: DecorationActivatedEvent) => void) => void;
