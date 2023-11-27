import React from "react";
import { Image, View } from "react-native";
import UiText from '../typography/UiText';
import HStack from './flex/HStack';
import Screen from './Screen';

const LoaderScreen = () => (
  <Screen>
    <HStack
      style={{ backgroundColor: "black", padding: 10 }}
      mb={20}
      justifyContent="space-between"
      alignItems="center"
    >
      <View style={{ width: 40 }} />
      <HStack justifyContent="center" style={{ flex: 1 }}>
        <UiText color="white" fontSize={20}>Un peu de patience</UiText>
      </HStack>
      <View style={{ width: 40 }} />
    </HStack>

    <Image
      source={require("../../../../assets/images/logo-beta.png")}
      style={{
        width: 100,
        height: 100,
        alignSelf: "center",
        marginBottom: 20,
      }}
    />

    <UiText fontSize={20} textAlign="center">Chargement en cours...</UiText>
  </Screen>
);

export default LoaderScreen;
