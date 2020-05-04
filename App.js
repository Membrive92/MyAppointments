import React, {useState} from 'react';
import {Text, StyleSheet, View, FlatList} from 'react-native';
import Appointment from './components/appointment';
import Form from './components/form';

const App = () => {
  const [appointments, setAppointments] = useState([
    {id: '1', client: 'Wika', owner: 'Jose', comment: 'Agressive'},
    {id: '2', client: 'Trambolico', owner: 'pepita', comment: 'Sleeping'},
    {id: '3', client: 'Cascabeles', owner: 'paca', comment: 'Hungry'},
  ]);

  const deleteClient = id => {
    setAppointments(currentAppointments => {
      return currentAppointments.filter(appointment => appointment.id !== id);
    });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Appointments</Text>
      <Form />
      <Text style={styles.title}>
        {appointments.length > 0
          ? 'Manage your appointments'
          : 'There are no appointments'}
      </Text>
      <FlatList
        data={appointments}
        renderItem={({item}) => (
          <Appointment appointment={item} deleteClient={deleteClient} />
        )}
        keyExtractor={appointment => appointment.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#87D831',
    flex: 1,
  },
  title: {
    color: 'black',
    marginTop: 10,
    marginBottom: 8,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
export default App;
