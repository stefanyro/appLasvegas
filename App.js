import React from "react";
import { Button, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import InicioScreen from "./src/Inicio/Screen/InicioScreen";
import HomeScreen from "./src/Inicio/Screen/HomeScreen";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
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
          name="Home"
          component={HomeScreen}
          options={{
            title: "Home",
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
}
