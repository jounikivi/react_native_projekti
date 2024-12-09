import React from 'react';
import { View, Text, Image } from 'react-native';
import { plantProfileScreenStyles as styles } from '../styles/styles';

// Näyttää kasvin tiedot
const PlantProfileScreen = ({ route }) => {
  const { plant } = route.params || {};

  if (!plant) {
    return (
      <View style={styles.container}>
        <Text>Ei tietoja valitusta kasvista</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: plant.image || 'https://via.placeholder.com/150' }} style={styles.image} />
      <Text style={styles.name}>{plant.name}</Text>
      <Text>Lajike: {plant.species}</Text>
    </View>
  );
};

export default PlantProfileScreen;
