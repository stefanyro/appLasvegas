import React from "react";
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import InicioScreen from "./src/Inicio/Screen/InicioScreen";
import CartaScreen from "./src/Inicio/Screen/CartaScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Inicio" component={InicioScreen} options={{ tabBarBadge: 3 }} />
        <Tab.Screen name="Carta" component={CartaScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}