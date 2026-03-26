import type { Locator } from '@readium/shared';
import type { Link, Locator as LocalLocator } from '../../src/interfaces';
/**
 * Normalizes an href by removing leading slashes for consistency across platforms.
 *
 * The Readium toolkit expects hrefs in relative format (e.g., "OPS/main3.xml")
 * rather than absolute format (e.g., "/OPS/main3.xml").
 *
 * @param href - The href to normalize
 * @returns The normalized href without leading slash
 */
export declare function normalizeHref(href: string): string;
/**
 * Normalizes a location object (Link or Locator) by normalizing its href.
 *
 * @param location - The Link or Locator to normalize
 * @returns A new location object with normalized href
 */
export declare function normalizeLocation<T extends {
    href: string;
}>(location: T): T;
/**
 * Converts a Link or Locator to a Readium Locator format suitable for navigation.
 *
 * @param location - The Link or Locator from the file.initialLocation
 * @returns A Locator object ready for the Readium navigator, or undefined if invalid
 */
export declare function convertToNavigatorLocator(location: Link | LocalLocator): Locator | undefined;
