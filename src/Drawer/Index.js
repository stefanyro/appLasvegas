import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import InicioScreen from "./src/Inicio/Screen/InicioScreen";
import HomeScreen from "./src/Inicio/Screen/HomeScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";

const RooStack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <RooStack.Navigator>
        <RooStack.Screen
          name="Inicio"
          component={InicioScreen}
          options={{
            title: "My inicio",
            headerStyle: {
              backgroundColor: "#2f4f4f",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <RooStack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "My home" }}
        />
      </RooStack.Navigator>
    </NavigationContainer>
  );
}
