import type { Link as SpecLink } from '../specs/ReadiumView.nitro';
import type { Link } from '../interfaces/Link';
/**
 * Reconstructs a nested Link tree from the flat array produced by the
 * native bridge. Each flat link carries `depth`, `hasChildren`,
 * `parentHref`, and `position` fields set by the native flattener.
 * The tree is built using `parentHref` to establish parent-child
 * relationships and `position` to order siblings.
 */
export declare function buildLinkTree(flatLinks: SpecLink[]): Link[];
