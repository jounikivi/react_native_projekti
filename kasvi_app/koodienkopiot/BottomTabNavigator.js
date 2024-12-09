import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import AddPlantScreen from '../screens/AddPlantScreen';
import PlantProfileScreen from '../screens/PlantProfileScreen';
import { Ionicons } from '@expo/vector-icons'; // Kuvakkeita varten

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Koti') {
            iconName = 'home';
          } else if (route.name === 'Lisää kasvi') {
            iconName = 'add-circle';
          } else if (route.name === 'Profiili') {
            iconName = 'leaf';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#00796b', // Aktiivinen väri
        tabBarInactiveTintColor: 'gray',  // Ei-aktiivinen väri
      })}
    >
      <Tab.Screen name="Koti" component={HomeScreen} />
      <Tab.Screen name="Lisää kasvi" component={AddPlantScreen} />
      <Tab.Screen name="Profiili" component={PlantProfileScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
