import React, {useState} from 'react';
import {Text, StyleSheet, View, TextInput, Button} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const Form = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    console.warn('A date has been picked: ', date);
    hideDatePicker();
  };

  // Time Picker
  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleConfirmTime = date => {
    console.warn('A date has been picked: ', date);
    hideTimePicker();
  };

  return (
    <>
      <View style={styles.form}>
        <View>
          <Text style={styles.label}>Client: </Text>
          <TextInput
            style={styles.input}
            onChangeText={text => console.log(text)}
          />
        </View>
        <View>
          <Text style={styles.label}>Owner: </Text>
          <TextInput
            style={styles.input}
            onChangeText={text => console.log(text)}
          />
        </View>
        <View>
          <Text style={styles.label}>Phone: </Text>
          <TextInput
            style={styles.input}
            onChangeText={text => console.log(text)}
            keyboardType="phone-pad"
          />
        </View>
        <View>
          <Button title="Show Date Picker" onPress={showDatePicker} />
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
            locale="en_GB"
          />
        </View>
        <View>
          <Button title="Show Time Picker" onPress={showTimePicker} />
          <DateTimePickerModal
            isVisible={isTimePickerVisible}
            mode="time"
            onConfirm={handleConfirmTime}
            onCancel={hideTimePicker}
            is24Hour
          />
        </View>
        <View>
          <Text style={styles.label}>Comments: </Text>
          <TextInput
            multiline
            style={styles.input}
            onChangeText={text => console.log(text)}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  form: {
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: '2.5%',
  },
  label: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 20,
  },
  input: {
    marginTop: 10,
    height: 50,
    borderColor: '#e1e1e1',
    borderWidth: 1,
    borderStyle: 'solid',
  },
});
export default Form;
