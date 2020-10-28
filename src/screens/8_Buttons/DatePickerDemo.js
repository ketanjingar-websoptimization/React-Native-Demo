import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import DatePicker from 'react-native-datepicker';

const todaysDate = new Date();

export default class DatePickerDemo extends React.Component {
  state = {
    date: new Date(),
  };

  render() {
    return (
      <View style={styles.container}>
        <DatePicker
          style={{width: 200}}
          date={this.state.date}
          placeholder="Select date"
          format="YYYY-MM-DD"
          minDate="1967-01-01"
          maxDate={todaysDate}
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 5,
              marginLeft: 0,
            },
            dateInput: {
              marginLeft: 36,
            },
          }}
          onDateChange={(date) => this.setState({date: date})}
        />
      </View>
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
