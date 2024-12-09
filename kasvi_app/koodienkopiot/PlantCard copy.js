import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

// Komponentti, joka näyttää yksittäisen kasvin tiedot
const PlantCard = ({ plant, onRemove }) => {
  // Muotoillaan päivämäärä Suomen aikavyöhykkeeseen
  const formattedDate = new Date(plant.nextWatering).toLocaleString('fi-FI', {
    timeZone: 'Europe/Helsinki', // Suomen aikavyöhyke
    day: '2-digit', // Päivä kahdella numerolla
    month: '2-digit', // Kuukausi kahdella numerolla
    year: 'numeric', // Vuosi neljällä numerolla
    hour: '2-digit', // Tunnit kahdella numerolla
    minute: '2-digit', // Minuutit kahdella numerolla
  });

  return (
    <View style={styles.card}>
      {/* Kasvin nimi */}
      <Text style={styles.name}>{plant.name}</Text>

      {/* Kasvin lajike */}
      <Text style={styles.details}>Lajike: {plant.species}</Text>

      {/* Seuraava kastelu */}
      <Text style={styles.details}>Seuraava kastelu: {formattedDate}</Text>

      {/* Poista-painike */}
      <Button title="Poista" color="red" onPress={() => onRemove(plant.id)} />
    </View>
  );
};

// Tyylit kasvikortille
const styles = StyleSheet.create({
  card: {
    flexDirection: 'column', // Elementit pystyssä
    padding: 15, // Kortin sisäinen marginaali
    marginVertical: 10, // Kortin väli pystysuunnassa
    backgroundColor: '#f5f5f5', // Vaalea taustaväri
    borderRadius: 10, // Pyöristetyt reunat
    elevation: 3, // Varjoefekti (Android)
    shadowColor: '#000', // Varjon väri (iOS)
    shadowOffset: { width: 0, height: 2 }, // Varjon sijainti (iOS)
    shadowOpacity: 0.2, // Varjon läpinäkyvyys (iOS)
    shadowRadius: 4, // Varjon pehmeys (iOS)
  },
  name: {
    fontSize: 18, // Fonttikoko
    fontWeight: 'bold', // Lihavoitu
    marginBottom: 5, // Alareunan marginaali
  },
  details: {
    fontSize: 16, // Fonttikoko
    color: '#555', // Vaaleanharmaa teksti
    marginBottom: 5, // Alareunan marginaali
  },
});

export default PlantCard;
