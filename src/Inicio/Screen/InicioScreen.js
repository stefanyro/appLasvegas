import React from "react";
import { View, Text, Button } from "react-native";

export default function InicioScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Button
      onPress={() => navigation.navigate('Carta', {
        itemId: 86,
        otherParam: 'anything you want here',
      })}
      title="Go to carta"
    />
  </View>
  );
}
