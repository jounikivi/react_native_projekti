import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import AddPlantScreen from '../screens/AddPlantScreen';
import PlantProfileScreen from '../screens/PlantProfileScreen';
import TestNotification from '../services/TestNotification'; // Päivitetty polku
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Add Plant') {
            iconName = 'add-circle';
          } else if (route.name === 'Profile') {
            iconName = 'leaf';
          } else if (route.name === 'Test Notification') {
            iconName = 'notifications';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#00796b',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarLabel: 'Etusivu' }} />
      <Tab.Screen name="Add Plant" component={AddPlantScreen} options={{ tabBarLabel: 'Lisää Kasvi' }} />
      <Tab.Screen name="Profile" component={PlantProfileScreen} options={{ tabBarLabel: 'Profiili' }} />
      <Tab.Screen
        name="Test Notification"
        component={TestNotification}
        options={{ tabBarLabel: 'Testi' }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
