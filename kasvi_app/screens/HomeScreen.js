import React, { useContext } from 'react';
import { View, FlatList, Text } from 'react-native';
import PlantCard from '../components/PlantCard';
import { AppContext } from '../context/AppContext';
import { commonStyles } from '../styles/commonStyles';

const HomeScreen = ({ navigation }) => {
  const { plants } = useContext(AppContext); // Lataa kasvit kontekstista

  return (
    <View style={commonStyles.container}>
      {plants.length === 0 ? (
        <Text style={commonStyles.text}>Ei kasveja lisättynä.</Text>
      ) : (
        <FlatList
          data={plants}
          keyExtractor={(item) => item.id.toString()} // Uniikki avain jokaiselle kasville
          renderItem={({ item }) => (
            <PlantCard
              plant={item}
              onPress={() => navigation.navigate('Profile', { plant: item })}
            />
          )}
        />
      )}
    </View>
  );
};

export default HomeScreen;
