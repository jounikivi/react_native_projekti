import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PlantProfileScreen = ({ route }) => {
  const { plant } = route.params || {}; // Parametrien käyttö

  return (
    <View style={styles.container}>
      <Text>Kasvin profiili</Text>
      <Text>{plant?.name || 'Ei valittua kasvia'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default PlantProfileScreen;
