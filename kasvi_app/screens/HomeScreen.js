import React, { useContext } from 'react';
import { View, FlatList, Text, Image } from 'react-native';
import PlantCard from '../components/PlantCard';
import CustomButton from '../components/CustomButton';
import { AppContext } from '../context/AppContext';
import { homeScreenStyles as styles } from '../styles/styles';

// Näyttää kasvilistan tai viestin, jos lista on tyhjä
const HomeScreen = ({ navigation }) => {
  const { plants, removePlant } = useContext(AppContext);

  return (
    <View style={styles.container}>
      {plants.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Image
            source={{ uri: 'https://via.placeholder.com/150' }} // Placeholder-kuva
            style={styles.emptyImage}
          />
          <Text style={styles.emptyText}>Ei kasveja lisättynä.</Text>
          <Text style={styles.emptyText}>Paina 'Lisää kasvi' aloittaaksesi.</Text>
        </View>
      ) : (
        <FlatList
          data={plants}
          renderItem={({ item }) => (
            <PlantCard
              plant={item}
              onRemove={removePlant}
              onPress={() => navigation.navigate('Profile', { plant: item })}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
      <CustomButton
        title="Peru kaikki muistutukset"
        onPress={() => console.log('Muistutukset peruttu')}
      />
    </View>
  );
};

export default HomeScreen;
