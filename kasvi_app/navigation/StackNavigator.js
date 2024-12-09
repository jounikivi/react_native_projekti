import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import AddPlantScreen from '../screens/AddPlantScreen';
import PlantProfileScreen from '../screens/PlantProfileScreen';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="AddPlant" component={AddPlantScreen} />
      <Stack.Screen name="PlantProfile" component={PlantProfileScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
