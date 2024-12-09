import React, { useContext } from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import CustomButton from '../components/CustomButton';
import PlantCard from '../components/PlantCard';
import { AppContext } from '../context/AppContext';

// Etusivun näkymä, joka näyttää listan kasveista
// Sisältää toiminnon lisätä uusi kasvi ja poistaa olemassa olevia kasveja
const HomeScreen = ({ navigation }) => {
  const { plants, removePlant } = useContext(AppContext); // Haetaan kasvit ja poistotoiminto kontekstista

  return (
    <View style={styles.container}>
      {/* Jos lista on tyhjä, näytetään ohjeet käyttäjälle */}
      {plants.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>Ei kasveja lisättynä.</Text>
          <Text style={styles.emptyText}>Paina 'Lisää kasvi' aloittaaksesi.</Text>
        </View>
      ) : (
        // Näytetään lista kasveista käyttäen PlantCard-komponenttia
        <FlatList
          data={plants}
          renderItem={({ item }) => (
            <PlantCard plant={item} onRemove={removePlant} /> // Välitetään poistotoiminto PlantCardille
          )}
          keyExtractor={(item) => item.id.toString()} // Kasvin ID on avain
        />
      )}

      {/* Painike uuden kasvin lisäämiseen */}
      {/* <CustomButton title="Lisää kasvi" onPress={() => navigation.navigate('AddPlant')} /> */}
    </View>
  );
};

// Tyylit etusivulle
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 16,
    color: '#555',
  },
});

export default HomeScreen;
