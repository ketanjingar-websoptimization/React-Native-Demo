import React from 'react';
import {
  StyleSheet,
  Text,
  StatusBar,
  View,
  Dimensions,
  Platform,
} from 'react-native';

import {
  widthPercentageToDP,
  heightPercentageToDP,
} from 'components/CalculateHeightWidth';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default class ScreenDimensionInPercentageDemo extends React.Component {
  render() {
    console.log('ketn');
    return (
      <>
        <View
          style={{
            flex: 1,
            width: screenWidth,
            backgroundColor: 'powderblue',
          }}>
          <View
            style={{
              height: heightPercentageToDP('20%'),
              width: widthPercentageToDP('70%'),
              backgroundColor: 'red',
            }}>
            <View
              style={{
                height: heightPercentageToDP('20%'),
                width: widthPercentageToDP('30%'),
                backgroundColor: 'blue',
              }}></View>
            <View
              style={{
                height: heightPercentageToDP('20%'),
                width: widthPercentageToDP('70%'),
                backgroundColor: 'green',
              }}></View>
          </View>

          <View style={{backgroundColor: 'violet'}}>
            <View
              style={{
                height: heightPercentageToDP('20%'),
                width: widthPercentageToDP('30%'),
                backgroundColor: 'yellow',
              }}></View>
            <View
              style={{
                height: heightPercentageToDP('20%'),
                width: widthPercentageToDP('70%'),
                backgroundColor: 'orange',
              }}></View>
          </View>
        </View>
      </>
    );
  }
}
