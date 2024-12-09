import React from 'react';
import { Button, View, StyleSheet, Alert } from 'react-native';
import { scheduleNotification } from './notificationService'; // Korjattu polku

const TestNotification = () => {
  const handleTestNotification = async () => {
    try {
      const date = new Date(Date.now() + 10000); // 10 sekunnin päästä
      await scheduleNotification('Testimuistutus', 'Tämä on testimuistutus!', date);
      Alert.alert('Onnistui', `Muistutus ajastettu: ${date.toLocaleTimeString()}`);
    } catch (error) {
      console.error('Virhe testimuistutuksessa:', error);
      Alert.alert('Virhe', 'Muistutuksen ajastus epäonnistui.');
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Testaa muistutus (10 sekunnin päästä)" onPress={handleTestNotification} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TestNotification;
