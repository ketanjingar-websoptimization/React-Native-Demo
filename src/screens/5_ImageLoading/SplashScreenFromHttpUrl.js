import React from 'react';
import {StyleSheet, Text, View, ActivityIndicator, Image} from 'react-native';
import * as Screen from '@helpers/CalculateHeightWidth';
import {MyActivityIndicator} from '@components';
import Assets from '@constants/assets';

export default class SplashScreenFromHttpUrl extends React.Component {
  state = {
    loading: false,
  };
  render() {
    console.log(this.state.loading.toString());
    return (
      <View style={styles.containerMain}>
        <Image
          source={Assets.Images.splashscreen}
          source={{
            uri:
              'https://landerapp.com/blog/wp-content/uploads/2018/06/1_FFP1bisztXseQFbZ-WQedw-1-1472x1472.png',
          }}
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
    flexDirection: 'column',
  },
  image: {
    height: Screen.screenHeight,
    width: Screen.screenWidth,
  },
});
