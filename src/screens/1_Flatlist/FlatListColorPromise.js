import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  Text,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
} from 'react-native';

const Item = ({num, sum, isSelected}) => (
  <View style={styles.title}>
    <Text style={styles.text}>
      {num} - {sum}
    </Text>
  </View>
);

export default class FlatListColorPromise extends React.Component {
  state = {
    isLoading: true,
    firstArray: [],
    secondArray: [],
    isSelected: false,
    itemPressed: '',
    selected: '',
    initialColor: 'orange',
  };

  loadArray = () => {
    setTimeout(() => {
      var sum = 0;
      for (let i = 0; i < 1000; i++) {
        let x = i < 2 ? (sum = i) : (sum = sum + i);
        this.state.secondArray.push({
          num: 'num = ' + i.toString(),
          sum: 'sum = ' + sum.toString(),
        });
      }
      this.setState({
        firstArray: this.state.secondArray,
        isLoading: false,
      });
    }, 1000);
  };

  componentDidMount() {
    this.loadArray();
  }

  render() {
    let visible = this.state.isLoading;

    clickHandler = (item) => {
      if (
        this.state.selected === '(Selected)' &&
        this.state.itemPressed === item.num
      ) {
        this.setState({
          itemPressed: item.num,
          isSelected: true,
          selected: '',
        });
      } else {
        this.setState({
          itemPressed: item.num,
          isSelected: false,
          selected: '(Selected)',
        });
      }
    };

    return (
      <>
        <StatusBar barStyle="light-content" />
        <View style={styles.containerMain}>
          {this.state.isLoading ? (
            <ActivityIndicator
              style={{height: 80}}
              color="#C00"
              size="large"
              animating={visible}
            />
          ) : (
            <FlatList
              data={this.state.firstArray}
              renderItem={({item}) => {
                return (
                  <TouchableOpacity
                    style={[
                      styles.touchable,
                      {
                        backgroundColor:
                          this.state.itemPressed === item.num &&
                          this.state.selected === '(Selected)'
                            ? 'green'
                            : 'orange',
                      },
                    ]}
                    onPress={() => clickHandler(item)}>
                    <Item
                      num={item.num}
                      sum={item.sum}
                      isPressed={item.isPressed}
                      isSelected={
                        this.state.itemPressed === item.num
                          ? this.state.selected
                          : ''
                      }
                    />
                  </TouchableOpacity>
                );
              }}
              keyExtractor={(item) => item.num}
            />
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
  touchable: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  text: {
    textAlign: 'center',
    fontSize: 18,
  },
  title: {
    fontSize: 32,
  },
});
