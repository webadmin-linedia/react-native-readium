import { Locator, Manifest, Publication } from '@readium/shared';
import type { Link } from '../../src/interfaces/Link';
/**
 * Normalizes a publication URL to ensure it ends with /
 * If URL ends with manifest.json, extracts the base directory
 */
export declare function normalizePublicationURL(url: string): string;
/**
 * Creates positions array from publication reading order
 * NOTE: The published npm packages (v2.2.5) require positions to be passed explicitly
 */
export declare function createPositions(publication: Publication): Locator[];
/**
 * Extracts table of contents items from manifest and normalizes them
 * into our Link interface with children.
 */
export declare function extractTableOfContents(manifest: Manifest): Link[];
