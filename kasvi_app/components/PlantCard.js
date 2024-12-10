import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native';
import { commonStyles } from '../styles/commonStyles';
import { AppContext } from '../context/AppContext';

const PlantCard = ({ plant, onPress }) => {
  const { removePlant } = useContext(AppContext); // Käytä poisto-funktiota kontekstista

  return (
    <TouchableOpacity onPress={onPress} style={commonStyles.card}>
      <Text style={commonStyles.text}>{plant.name || 'Ei nimeä'}</Text>
      <Text style={commonStyles.text}>Lajike: {plant.species || 'Ei lajiketta'}</Text>
      <Text style={commonStyles.text}>
        Seuraava kastelu:{' '}
        {plant.nextWatering
          ? new Date(plant.nextWatering).toLocaleString('fi-FI')
          : 'Ei asetettu'}
      </Text>
      <View style={commonStyles.buttonContainer}>
        <Button
          title="Poista"
          color="red"
          onPress={() => removePlant(plant.id)} // Poista kasvi
        />
      </View>
    </TouchableOpacity>
  );
};

export default PlantCard;
