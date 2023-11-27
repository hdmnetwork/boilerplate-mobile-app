import Constants from "expo-constants";
import React, { ReactNode } from "react";
import { Platform, SafeAreaView, StatusBar } from "react-native";

interface Props {
  barStatusColor?: string;
  children: ReactNode;
}

const Screen = ({ barStatusColor = 'black', children }: Props) => (
  <>
    <StatusBar backgroundColor={barStatusColor} />
    <SafeAreaView
      style={{
        paddingTop: Platform.OS === "android" ? Constants.statusBarHeight : 0,
        flex: 1,
      }}
    >
      {children}
    </SafeAreaView>
  </>
);

export default Screen;
