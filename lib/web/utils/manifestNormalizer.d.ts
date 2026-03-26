/**
 * Normalizes a Readium manifest object to ensure compatibility with the navigator.
 * Handles various inconsistencies in manifest formats:
 * - Converts string properties to arrays where required
 * - Normalizes date formats to ISO 8601
 * - Ensures required properties exist
 */
export declare function normalizeManifest(manifest: any): any;
