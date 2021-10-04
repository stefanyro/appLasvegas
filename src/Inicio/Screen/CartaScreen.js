import React from "react";
import { View, Text, Button } from "react-native";

const { itemId, otherParam } = route.params;

export default function CartaScreen({route, navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      <Button
        title="Go to Details... carta"
        onPress={() =>
          navigation.push('Carta', {
            itemId: Math.floor(Math.random() * 100),
          })
        }
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Inicio')} />
      <Button onPress={() => navigation.goBack()} title="Go back" color="#008080" />
    </View>
  );
}
