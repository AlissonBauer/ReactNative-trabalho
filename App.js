import React from 'react'
import Form from './src/screens/Form';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UniversitiesList from './src/screens/UniversitiesList';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Form"
          component={Form}
          options={{ title: 'Loguin' }}
        />
        <Stack.Screen
          name="Universities"
          component={UniversitiesList}
          options={{ title: 'Lista de Pokemons' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
