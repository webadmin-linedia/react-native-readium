/**
 * Normalizes metadata to ensure consistent structure per RWPM spec.
 *
 * This normalizer is library-agnostic and based on the stable RWPM specification,
 * ensuring it works regardless of how the underlying Readium library serializes data.
 *
 * https://readium.org/webpub-manifest/
 */
/**
 * Normalizes a localized string per RWPM spec.
 *
 * Per RWPM spec, a localized string can be:
 * 1. Plain string: "Moby-Dick"
 * 2. Language map: {"en": "Moby-Dick", "fr": "Moby Dick"}
 *
 * Priority for language selection:
 * 1. "undefined" or "und" (default/undetermined language)
 * 2. "en" (English fallback)
 * 3. First available language
 *
 * https://readium.org/webpub-manifest/contexts/default/
 */
export declare function normalizeLocalizedString(value: any): string;
/**
 * Normalizes contributors per RWPM spec.
 *
 * Per RWPM spec, a contributor can be:
 * 1. Plain string: "Herman Melville"
 * 2. Object: {"name": "Herman Melville", "sortAs": "Melville, Herman"}
 *
 * The Web library uses a Contributors class with an "items" property.
 *
 * https://readium.org/webpub-manifest/schema/contributor-object.schema.json
 */
export declare function normalizeContributors(value: any): any[] | undefined;
/**
 * Normalizes subjects per RWPM spec.
 *
 * Subject names can be LocalizedStrings.
 * The Web library uses a Subjects class with an "items" property.
 *
 * https://readium.org/webpub-manifest/schema/subject.schema.json
 */
export declare function normalizeSubjects(value: any): any[] | undefined;
/**
 * Normalizes the entire metadata object per RWPM spec.
 *
 * This function is library-agnostic and based on the stable RWPM specification,
 * ensuring it works regardless of how the underlying Readium library serializes data.
 *
 * https://readium.org/webpub-manifest/
 */
export declare function normalizeMetadata(metadata: any): any;
