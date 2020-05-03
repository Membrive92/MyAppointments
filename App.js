import React, {useState} from 'react';
import {Text, StyleSheet, View, FlatList} from 'react-native';
import Appointment from './components/appointment';

const App = () => {
  const [appointments, setAppointments] = useState([
    {id: '1', client: 'Wika', owner: 'Jose', comment: 'Agressive'},
    {id: '2', client: 'Trambolico', owner: 'pepita', comment: 'Sleeping'},
    {id: '3', client: 'Cascabeles', owner: 'paca', comment: 'Hungry'},
  ]);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Appointments</Text>
      <FlatList
        data={appointments}
        renderItem={({item}) => <Appointment appointment={item} />}
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
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
export default App;
