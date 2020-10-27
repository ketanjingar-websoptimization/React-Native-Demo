import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import * as Window from '@helpers/CalculateHeightWidth';

export default class ScreenDimensionInPercentageDemo extends React.Component {
  render() {
    return (
      <>
        <View
          style={{
            flex: 1,
            width: Window.screenWidth,
            backgroundColor: 'powderblue',
          }}>
          <View
            style={{
              height: Window.heightPercentageToDP('20%'),
              width: Window.widthPercentageToDP('70%'),
              backgroundColor: 'red',
            }}>
            <View
              style={{
                height: Window.heightPercentageToDP('20%'),
                width: Window.widthPercentageToDP('30%'),
                backgroundColor: 'blue',
              }}></View>
            <View
              style={{
                height: Window.heightPercentageToDP('20%'),
                width: Window.widthPercentageToDP('70%'),
                backgroundColor: 'green',
              }}></View>
          </View>

          <View style={{backgroundColor: 'violet'}}>
            <View
              style={{
                height: Window.heightPercentageToDP('20%'),
                width: Window.widthPercentageToDP('30%'),
                backgroundColor: 'yellow',
              }}></View>
            <View
              style={{
                height: Window.heightPercentageToDP('20%'),
                width: Window.widthPercentageToDP('70%'),
                backgroundColor: 'orange',
              }}></View>
          </View>
        </View>
      </>
    );
  }
}
