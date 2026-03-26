import { Locator, LocatorLocations, } from '@readium/shared';
/**
 * Normalizes a publication URL to ensure it ends with /
 * If URL ends with manifest.json, extracts the base directory
 */
export function normalizePublicationURL(url) {
    if (url.endsWith('manifest.json')) {
        return url.substring(0, url.lastIndexOf('/') + 1);
    }
    return url.endsWith('/') ? url : `${url}/`;
}
/**
 * Creates positions array from publication reading order
 * NOTE: The published npm packages (v2.2.5) require positions to be passed explicitly
 */
export function createPositions(publication) {
    return publication.readingOrder.items.map((link, idx) => {
        const position = idx + 1;
        return new Locator({
            href: link.href,
            type: link.type,
            title: link.title,
            locations: new LocatorLocations({
                position: position,
                progression: 0,
                totalProgression: idx / publication.readingOrder.items.length,
            }),
        });
    });
}
/**
 * Normalizes a Readium web Link into our Link interface, recursively
 * processing children.
 */
function normalizeLink(webLink) {
    const link = {
        href: webLink.href,
        title: webLink.title ?? undefined,
        rels: webLink.rels?.length ? webLink.rels : undefined,
        languages: webLink.languages?.length ? webLink.languages : undefined,
    };
    const childItems = webLink.children?.items ?? webLink.children;
    if (Array.isArray(childItems) && childItems.length > 0) {
        link.children = childItems.map((child) => normalizeLink(child));
    }
    return link;
}
/**
 * Extracts table of contents items from manifest and normalizes them
 * into our Link interface with children.
 */
export function extractTableOfContents(manifest) {
    const rawToc = Array.isArray(manifest.toc)
        ? manifest.toc
        : // @ts-ignore
            manifest.toc?.items || [];
    return rawToc.map((item) => normalizeLink(item));
}
