import React from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  Text,
  ActivityIndicator,
} from 'react-native';
import * as co from '@constants';

// https://programming-quotes-api.herokuapp.com/quotes/random
export default class AsyncDemo extends React.Component {
  url = 'https://programming-quotes-api.herokuapp.com/quotes/random';

  state = {
    isLoading: true,
    post: {en: '', author: ''},
  };

  constructor() {
    super();
    this.getData();
  }

  getData = async () => {
    try {
      let data = await fetch(this.url);
      let post = await data.json();
      this.setState({post, isLoading: false});
    } catch (error) {
      console.log('error occured');
      console.log(error);
    }
  };

  render() {
    const animating = this.state.isLoading;

    return (
      <>
        <StatusBar barStyle="light-content" />
        <View style={styles.containerMain}>
          {this.state.isLoading ? (
            <ActivityIndicator
              style={{height: 80}}
              color="#C00"
              size="large"
              animating={animating}
            />
          ) : (
            <>
              <Text style={styles.quote}>{this.state.post.en}</Text>
              <Text style={styles.author}> - {this.state.post.author}</Text>
            </>
          )}
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: 'powderblue',
    flex: 1,
    margin: 10,
    justifyContent: 'center',
  },
  quote: {
    // backgroundColor: 'grey',
    textAlign: 'center',
    fontSize: 30,
    fontStyle: 'italic',
  },
  author: {
    backgroundColor: 'grey',
    textAlign: 'center',
    fontSize: 20,
  },
});
