import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import Assets from '@constants/assets';

const url =
  'https://landerapp.com/blog/wp-content/uploads/2018/06/1_FFP1bisztXseQFbZ-WQedw-1-1472x1472.png';

export default class ImageMethods extends React.Component {
  state = {
    // loading: false,
    height: '',
    width: '',
  };

  getSize() {
    console.log('getSize() called...');
    Image.getSize(
      url,
      (width, height) => {
        this.setState({
          height: height,
          width: width,
        });
        // console.log(`The image dimensions are ${width}x${height}`);
      },
      (error) => {
        Alert.alert(`Couldn't get the image size: `, `${error.message}`);
      },
    );
  }

  getSizeWithHeaders() {
    console.log('getSizeWithHeaders() called...');
  }

  prefetch() {
    console.log('prefetch() called...');
  }

  abortPrefetch() {
    console.log('abortPrefetch() called... ');
  }

  queryCache() {
    console.log('queryCache() called ... ');
  }

  resolveAssetSource() {
    console.log('resolveAssetSource() called...');
    const img = Assets.Images.splashscreen;
    const imgProps = Image.resolveAssetSource(img);
    this.setState({
      height: imgProps.height,
      width: imgProps.width,
    });
    console.log(imgProps);
  }

  componentDidMount() {
    // this.getSize(); // online image
    // this.getSizeWithHeaders();
    // this.prefetch();
    // this.abortPrefetch();
    // this.queryCache();
    // this.prefetch();
    this.resolveAssetSource(); // Local image
  }
  render() {
    return (
      <View style={styles.containerMain}>
        <Text style={styles.title}>Image Methods Demo</Text>
        <Image
          source={{
            uri: url,
          }}
          resizeMode="center" /*('cover', 'contain', 'stretch', 'repeat', 'center')*/
          style={styles.image}
        />
        <Text style={styles.text}>
          Original Image Height - {this.state.height}
        </Text>
        <Text style={styles.text}>
          Original Image Width - {this.state.width}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: 'powderblue',
    flex: 1,
    padding: 50,
  },
  image: {
    flex: 1,
  },
  title: {
    textAlign: 'center',
    backgroundColor: 'white',
    fontSize: 30,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
  },
});
