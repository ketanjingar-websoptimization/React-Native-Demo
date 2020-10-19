/* eslint-disable prettier/prettier */
/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './src/screens/App';
import App2 from './src/screens/App2';
import FlatListDemo from './src/screens/FlatListDemo';
import { name as appName } from './app.json';

// AppRegistry.registerComponent(appName, () => App);
// AppRegistry.registerComponent(appName, () => App2);
AppRegistry.registerComponent(appName, () => FlatListDemo);


