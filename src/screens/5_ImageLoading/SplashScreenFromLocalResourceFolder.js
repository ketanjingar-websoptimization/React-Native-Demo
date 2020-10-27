import React from 'react';
import {StyleSheet, Text, View, ActivityIndicator, Image} from 'react-native';
import * as Screen from '@helpers/CalculateHeightWidth';
import {MyActivityIndicator} from '@components';
import Assets from '@constants/assets';

export default class SplashScreenFromLocalResourceFolder extends React.Component {
  state = {
    loading: false,
  };
  render() {
    console.log(this.state.loading.toString());
    return (
      <View style={styles.containerMain}>
        <Image
          source={Assets.Images.splashscreen}
          style={styles.image}
          onLoadStart={() => this.setState({loading: true})}
          onLoadEnd={() => this.setState({loading: false})}
        />
        {this.state.loading && <MyActivityIndicator />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: 'powderblue',
    flex: 1,
    flexDirection: 'row',
  },
  image: {
    height: Screen.screenHeight,
    width: Screen.screenWidth,
  },
});
