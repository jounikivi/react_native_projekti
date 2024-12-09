import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppProvider } from './context/AppProvider';
import BottomTabNavigator from './navigation/BottomTabNavigator';

// Sovelluksen pääkomponentti
export default function App() {
  return (
    <AppProvider>
      <NavigationContainer>
        <BottomTabNavigator />
      </NavigationContainer>
    </AppProvider>
  );
}
