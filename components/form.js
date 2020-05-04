import React, {useState} from 'react';
import {Text, StyleSheet, View, TextInput} from 'react-native';

const Form = () => {
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
