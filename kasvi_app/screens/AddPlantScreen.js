import React, { useState, useContext } from 'react';
import { View, TextInput, Text, Alert } from 'react-native';
import CustomButton from '../components/CustomButton';
import { AppContext } from '../context/AppContext';
import { addPlantScreenStyles as styles } from '../styles/styles';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import * as ImagePicker from 'expo-image-picker';

// Näkymä uuden kasvin lisäämiselle
const AddPlantScreen = ({ navigation }) => {
  const { addPlant } = useContext(AppContext);
  const [name, setName] = useState('');
  const [species, setSpecies] = useState('');
  const [nextWatering, setNextWatering] = useState(new Date());
  const [image, setImage] = useState(null);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  // Ajan valintatoiminto
  const handleConfirmDate = (date) => {
    setNextWatering(date);
    setDatePickerVisibility(false);
  };

  // Kuvan valintatoiminto
  const pickImage = async () => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permission.granted) {
      Alert.alert('Lupa tarvitaan', 'Sovellus tarvitsee luvan käyttää galleriaa.');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.uri);
    }
  };

  // Kasvin lisääminen
  const handleAddPlant = () => {
    if (!name || !species) {
      Alert.alert('Virhe', 'Täytä kaikki kentät.');
      return;
    }

    addPlant({
      id: Date.now(),
      name,
      species,
      nextWatering: nextWatering.toISOString(),
      image,
    });

    Alert.alert('Onnistui', 'Kasvi lisätty.');
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Kasvin nimi</Text>
      <TextInput
        style={styles.input}
        placeholder="Esim. Aloe Vera"
        value={name}
        onChangeText={setName}
      />
      <Text style={styles.label}>Lajike</Text>
      <TextInput
        style={styles.input}
        placeholder="Esim. Aloe"
        value={species}
        onChangeText={setSpecies}
      />
      <Text style={styles.label}>Seuraava kastelu</Text>
      <CustomButton
        title={`Valitse aika: ${nextWatering.toLocaleString()}`}
        onPress={() => setDatePickerVisibility(true)}
      />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="datetime"
        onConfirm={handleConfirmDate}
        onCancel={() => setDatePickerVisibility(false)}
      />
      <Text style={styles.label}>Kasvin kuva</Text>
      <CustomButton title="Valitse kuva galleriasta" onPress={pickImage} />
      {image && <Text style={styles.imageText}>Kuva valittu</Text>}
      <CustomButton title="Lisää kasvi" onPress={handleAddPlant} />
    </View>
  );
};

export default AddPlantScreen;
