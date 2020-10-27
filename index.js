import {AppRegistry} from 'react-native';
import * as Screen from '@screens';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Screen.NestedTouchableOpacityDemo);
