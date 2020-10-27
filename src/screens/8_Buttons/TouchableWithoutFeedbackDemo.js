import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Alert,
  TouchableWithoutFeedback,
} from 'react-native';

export default TouchableWithoutFeedbackDemo = () => {
  const [count, setCount] = useState(0);

  _clickHandler = () => {
    console.log('clicked');
    setCount(count + 1);
  };
  return (
    <View style={styles.container}>
      <View style={styles.countContainer}>
        <Text style={styles.countText}>count : {count}</Text>
      </View>

      <TouchableWithoutFeedback
        onPress={_clickHandler}
        onLongPress={() => console.log('on long press')}>
        <View style={styles.button}>
          <Text>Touch Here</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
  countContainer: {
    alignItems: 'center',
    padding: 10,
  },
  countText: {
    color: '#FF00FF',
  },
});
