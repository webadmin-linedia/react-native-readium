import { getHostComponent } from 'react-native-nitro-modules';
import ReadiumViewConfig from '../../nitrogen/generated/shared/json/ReadiumViewConfig.json';
export const NitroReadiumView = getHostComponent('ReadiumView', () => ReadiumViewConfig);
