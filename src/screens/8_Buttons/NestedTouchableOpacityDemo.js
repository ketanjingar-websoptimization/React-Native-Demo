import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default NestedTouchableOpacityDemo = ({}) => {
  const [count, setCount] = useState(0);

  _countAdd = () => {
    setCount((prevCount) => prevCount + 1); //prevCount can be any name
  };
  _countSub = () => {
    setCount((prevCount) => prevCount - 1); //prevCount can be any name
  };

  return (
    <View style={styles.container}>
      <View style={styles.countContainer}>
        <Text>Count : {count}</Text>
      </View>
      <TouchableOpacity style={styles.buttonMain} onPress={_countAdd}>
        <TouchableOpacity style={styles.buttonChild} onPress={_countSub}>
          <Text style={styles.text}>Count -- (Nested)</Text>
        </TouchableOpacity>
        <Text style={styles.text}>Count++ (Main)</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'powderblue',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  countContainer: {
    alignItems: 'center',
    padding: 10,
  },
  buttonMain: {
    alignItems: 'center',
    backgroundColor: 'cornflowerblue',
    padding: 10,
  },
  buttonChild: {
    alignItems: 'center',
    backgroundColor: 'cornsilk',
    padding: 10,
  },
  text: {
    fontSize: 18,
  },
});
