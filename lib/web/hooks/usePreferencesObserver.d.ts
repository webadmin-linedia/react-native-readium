import { EpubNavigator, EpubPreferences } from '@readium/navigator';
/**
 * Maps our app's preferences to the navigator's expected format
 */
export declare function mapPreferencesToNavigator(preferences: any): EpubPreferences;
export declare const usePreferencesObserver: (navigator?: EpubNavigator | null, preferences?: any) => void;
