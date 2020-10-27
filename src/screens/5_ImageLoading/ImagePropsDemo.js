import React from 'react';
import {StyleSheet, Text, View, ActivityIndicator, Image} from 'react-native';
import * as Screen from '@helpers/CalculateHeightWidth';
import {MyActivityIndicator} from '@components';

export default class ImagePropsDemo extends React.Component {
  state = {
    loading: false,
  };
  render() {
    console.log(this.state.loading.toString());
    return (
      <View style={styles.containerMain}>
        <Text style={styles.title}>Image Props Demo</Text>
        <Image
          source={{
            uri:
              'https://landerapp.com/blog/wp-content/uploads/2018/06/1_FFP1bisztXseQFbZ-WQedw-1-1472x1472.png',
          }}
          // loadingIndicatorSource={require('@assets/images/loader.gif')}
          style={styles.image}
          // onLoadStart={() => this.setState({loading: true})}
          // onLoadEnd={() => this.setState({loading: false})}
          // blurRadius={2}
          // resizeMode="center"
          // capInsets={{left: 150, right: 150, bottom: 150, top: 15}}
          // fadeDuration={5000}
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
  },
  image: {
    flex: 1,
    width: 'auto',
  },
  title: {
    paddingTop: 20,
    textAlign: 'center',
    backgroundColor: 'white',
    fontSize: 34,
  },
});
