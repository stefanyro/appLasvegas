import React from "react";
import { StyleSheet } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import InicioScreen from "./src/Inicio/Screen/InicioScreen";
import CartaScreen from "./src/Inicio/Screen/CartaScreen";
import logo from "./assets/logo.png";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Inicio">
        <Drawer.Screen
          name="Inicio"
          component={InicioScreen}
          options={{
            title: "Inicio",
            headerStyle: {
              backgroundColor: "#1e90ff",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Drawer.Screen
          name="Carta"
          component={CartaScreen}
          options={{
            title: "Carta",
            headerStyle: {
              backgroundColor: "#008080",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
