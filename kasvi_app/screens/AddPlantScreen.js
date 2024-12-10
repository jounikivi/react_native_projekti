import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Alert, Image } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import CustomButton from '../components/CustomButton';
import { AppContext } from '../context/AppContext';
import { commonStyles } from '../styles/commonStyles';
import * as ImagePicker from 'expo-image-picker';

const AddPlantScreen = ({ navigation }) => {
  const { addPlant } = useContext(AppContext);

  const [name, setName] = useState('');
  const [species, setSpecies] = useState('');
  const [nextWatering, setNextWatering] = useState(new Date());
  const [image, setImage] = useState(null);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  // Päivitä seuraavan kastelun päivämäärä
  const handleConfirm = (date) => {
    setNextWatering(date);
    setDatePickerVisibility(false);
  };

  // Lisää uusi kasvi
  const handleAddPlant = async () => {
    if (!name || !species) {
      Alert.alert('Virhe', 'Täytä kaikki kentät ennen kasvin lisäämistä.');
      return;
    }
    const newPlant = {
      id: Date.now(),
      name,
      species,
      nextWatering: nextWatering.toISOString(),
      image,
    };
    await addPlant(newPlant);
    Alert.alert('Onnistui', 'Kasvi lisätty onnistuneesti!');
    navigation.goBack();
  };

  return (
    <View style={commonStyles.container}>
      <Text style={commonStyles.text}>Kasvin nimi</Text>
      <TextInput
        style={commonStyles.input}
        placeholder="Esim. Aloe Vera"
        value={name}
        onChangeText={setName}
      />
      <Text style={commonStyles.text}>Lajike</Text>
      <TextInput
        style={commonStyles.input}
        placeholder="Esim. Aloe"
        value={species}
        onChangeText={setSpecies}
      />
      <Text style={commonStyles.text}>Seuraava kastelu</Text>
      <CustomButton title="Valitse kasteluaika" onPress={() => setDatePickerVisibility(true)} />
      <Text style={commonStyles.text}>
        Valittu aika: {nextWatering.toLocaleString('fi-FI')}
      </Text>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="datetime"
        onConfirm={handleConfirm}
        onCancel={() => setDatePickerVisibility(false)}
      />
      <Text style={commonStyles.text}>Kasvin kuva</Text>
      <CustomButton title="Valitse kuva" onPress={async () => {
        const result = await ImagePicker.launchImageLibraryAsync({ mediaTypes: ImagePicker.MediaTypeOptions.Images });
        if (!result.canceled) setImage(result.uri);
      }} />
      {image && <Image source={{ uri: image }} style={commonStyles.image} />}
      <CustomButton title="Lisää kasvi" onPress={handleAddPlant} />
    </View>
  );
};

export default AddPlantScreen;
