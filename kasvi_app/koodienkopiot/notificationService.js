import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import CustomButton from '../components/CustomButton';
import { AppContext } from '../context/AppContext';
import { scheduleNotification } from '../services/notificationService';

const AddPlantScreen = ({ navigation }) => {
  const { addPlant } = useContext(AppContext);

  const handleAddPlant = async () => {
    const newPlant = {
      id: Date.now(),
      name: 'Aloe Vera',
      species: 'Aloe',
      nextWatering: '2024-12-01T10:00:00', // Testiaika
      image: '',
    };

    await addPlant(newPlant); // Lisää kasvi AppContextiin

    // Ajasta muistutus
    await scheduleNotification(
      'Kastelumuistutus',
      `${newPlant.name} kaipaa kastelua!`,
      newPlant.nextWatering
    );

    navigation.goBack(); // Palaa takaisin
  };

  return (
    <View style={styles.container}>
      <CustomButton title="Lisää kasvi ja muistutus" onPress={handleAddPlant} />
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

export default AddPlantScreen;
