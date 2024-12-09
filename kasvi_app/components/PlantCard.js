import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';

// PlantCard-komponentti näyttää yksittäisen kasvin tiedot ja tarjoaa mahdollisuuden poistaa kasvi tai siirtyä sen profiiliin.
const PlantCard = ({ plant, onRemove, onPress }) => {
  // Tarkistetaan ja formatoidaan seuraava kastelupäivämäärä
  const formattedDate =
    plant.nextWatering && !isNaN(new Date(plant.nextWatering))
      ? new Date(plant.nextWatering).toLocaleString('fi-FI', {
          timeZone: 'Europe/Helsinki',
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
        })
      : 'Ei tietoa kastelusta';

  return (
    // Koko kortista tehdään painettava, joka aktivoi `onPress`-funktion (esim. navigoi profiiliin).
    <TouchableOpacity onPress={onPress}>
      <View style={styles.card}>
        {/* Kasvin nimi */}
        <Text style={styles.name}>{plant.name || 'Ei nimeä'}</Text>

        {/* Kasvin lajike */}
        <Text style={styles.details}>Lajike: {plant.species || 'Ei lajiketta'}</Text>

        {/* Seuraavan kastelun ajankohta */}
        <Text style={styles.details}>Seuraava kastelu: {formattedDate}</Text>

        {/* Poista-painike, joka käyttää `onRemove`-funktiota kasvin poistamiseen */}
        <Button title="Poista" color="red" onPress={() => onRemove(plant.id)} />
      </View>
    </TouchableOpacity>
  );
};

// Tyylit kortille
const styles = StyleSheet.create({
  card: {
    flexDirection: 'column', // Kortin sisältö asetetaan pystysuuntaisesti.
    padding: 15, // Sisäinen marginaali.
    marginVertical: 10, // Väli korttien välillä pystysuunnassa.
    backgroundColor: '#f5f5f5', // Vaalea taustaväri kortille.
    borderRadius: 10, // Pyöristetyt reunat.
    elevation: 3, // Varjoefekti Androidilla.
    shadowColor: '#000', // Varjon väri iOS:llä.
    shadowOffset: { width: 0, height: 2 }, // Varjon sijainti iOS:llä.
    shadowOpacity: 0.2, // Varjon läpinäkyvyys iOS:llä.
    shadowRadius: 4, // Varjon pehmeys iOS:llä.
  },
  name: {
    fontSize: 18, // Kasvin nimen fonttikoko.
    fontWeight: 'bold', // Lihavoitu teksti kasvin nimelle.
    marginBottom: 5, // Alaosa marginaali.
  },
  details: {
    fontSize: 16, // Kasvin tietojen fonttikoko.
    color: '#555', // Harmaa väri tekstille.
    marginBottom: 5, // Alaosa marginaali.
  },
});

export default PlantCard;
