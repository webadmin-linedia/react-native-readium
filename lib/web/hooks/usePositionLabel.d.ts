import { EpubNavigator } from '@readium/navigator';
import type { Locator } from '../../src/interfaces';
interface PositionLabelData {
    currentPosition: number | null;
    totalPositions: number;
    label: string | null;
}
export declare const usePositionLabel: (navigator: EpubNavigator | null, positionsArray: Locator[]) => PositionLabelData;
export {};
