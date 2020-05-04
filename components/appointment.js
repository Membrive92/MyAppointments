import React from 'react';
import {Text, StyleSheet, View, TouchableHighlight} from 'react-native';

const Appointment = ({appointment, deleteClient}) => {
  const dialogDelete = id => {
    console.log('delete click', id);
    deleteClient(id);
  };

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
      <View>
        <TouchableHighlight
          onPress={() => dialogDelete(appointment.id)}
          style={styles.btnDelete}>
          <Text style={styles.txtBtnDelete}>Delete &times;</Text>
        </TouchableHighlight>
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
  btnDelete: {
    padding: 10,
    backgroundColor: 'red',
    marginVertical: 10,
  },
  txtBtnDelete: {
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Appointment;
