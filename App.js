import React, {useState} from 'react';
import {Text, StyleSheet, View} from 'react-native';

const App = () => {
  const [appointments, setAppointments] = useState([
    {id: '1', client: 'Wika', owner: 'Jose', features: 'Agressive'},
    {id: '2', client: 'Trambolico', owner: 'pepita', features: 'Sleeping'},
    {id: '3', client: 'Cascabeles', owner: 'paca', features: 'Hungry'},
  ]);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Appointments</Text>
      {appointments.map(appointment => (
        <View>
          <Text>{appointment.client}</Text>
        </View>
      ))}
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
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
export default App;
