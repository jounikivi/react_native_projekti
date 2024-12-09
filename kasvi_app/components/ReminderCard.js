import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ReminderCard = ({ reminder }) => {
  return (
    <View style={styles.card}>
      {/* Muistutuksen otsikko */}
      <Text style={styles.title}>{reminder.title}</Text>

      {/* Muistutuksen kuvaus */}
      <Text style={styles.details}>{reminder.description}</Text>

      {/* Muistutuksen ajankohta */}
      <Text style={styles.date}>
        Ajankohta: {new Date(reminder.date).toLocaleString('fi-FI', {
          timeZone: 'Europe/Helsinki',
        })}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 15,
    marginVertical: 10,
    backgroundColor: '#e0f7fa', // Vaaleansininen taustaväri
    borderRadius: 10,
    elevation: 2, // Varjoefekti (Android)
    shadowColor: '#000', // Varjon väri (iOS)
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#00796b', // Tumma vihreä
  },
  details: {
    fontSize: 16,
    color: '#555',
    marginBottom: 5,
  },
  date: {
    fontSize: 14,
    color: '#004d40', // Tumma vihreä
  },
});

export default ReminderCard;
