import React, {useState} from 'react';
import {View, StyleSheet, Text, Alert, TouchableOpacity} from 'react-native';

export default TouchableOpacityDemo = () => {
  const [count, setCount] = useState(0);

  _clickHandler = () => {
    setCount((prevCount) => prevCount + 1); //prevCount can be any name
  };

  return (
    <View style={styles.container}>
      <View style={styles.countContainer}>
        <Text>Count : {count}</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={_clickHandler}
        activeOpacity={0.5}>
        <Text>Press Here</Text>
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
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
});
