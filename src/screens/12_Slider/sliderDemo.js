import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Slider from '@react-native-community/slider';

export default sliderDemo = ({}) => {
  const [sliderValue, setSliderValue] = useState(0);
  return (
    <>
      <View style={styles.container}>
        <Text>Default Setting</Text>
        <Text>{sliderValue}</Text>
        <Slider
          style={{width: 200, height: 40}}
          minimumValue={0}
          maximumValue={1}
          onValueChange={(value) => setSliderValue(value.toFixed(3))}
          minimumTrackTintColor="brown"
          maximumTrackTintColor="#000000"
          onSlidingStart={() => console.log('sliding started...')}
          onSlidingComplete={() => console.log('sliding complete.')}
          step={0.25}
        />
        <Text>Initial value:0.5</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
