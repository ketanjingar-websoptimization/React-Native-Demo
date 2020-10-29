import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import * as Progress from 'react-native-progress';

export default class ProgressBarDemo extends Component {
  state = {
    barProgress: 0.0,
  };

  updateProgressBar = async () => {
    let count = 0.1;
    this.setState({
      barProgress: count + 0.1,
    });
  };

  componentDidMount() {
    console.log('componentDidUpdate() called...');
    for (let i = 0; i < 100; i++) {
      setTimeout(() => {
        this.updateProgressBar();
      }, 500);
    }
  }
  render() {
    return (
      <>
        <View style={styles.container}>
          <Progress.Bar progress={this.state.barProgress} width={200} />
          <Divider />
          <Progress.Pie progress={0.3} size={100} />
          <Divider />
          <Progress.Circle size={100} indeterminate={true} />
          <Divider />
          <Progress.CircleSnail size={100} color={['red', 'green', 'blue']} />
          <Divider />
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
