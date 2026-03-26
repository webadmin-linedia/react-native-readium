import type { Locator } from '@readium/shared';
import type { Link, Locator as LocalLocator } from '../../src/interfaces';
export declare const sanitizeInitialLocation: (initialLocation: Link | LocalLocator | undefined, positionsArray: Locator[]) => Locator | undefined;
