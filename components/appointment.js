import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const Appointment = ({appointment}) => {
  return (
    <View style={styles.appointment}>
      <View>
        <Text style={styles.label}>Client: </Text>
        <Text style={styles.text}>{appointment.client}</Text>
      </View>
      <View>
        <Text style={styles.label}>owner: </Text>
        <Text style={styles.text}>{appointment.owner}</Text>
      </View>
      <View>
        <Text style={styles.label}>Comments: </Text>
        <Text style={styles.text}>{appointment.comment}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  appointment: {
    backgroundColor: '#FFF',
    borderBottomColor: '#e1e1e1',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    padding: 20,
    marginBottom: 10,
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 20,
  },
  text: {
    fontSize: 18,
  },
});

export default Appointment;
