import { ApolloClient, ApolloProvider, NormalizedCacheObject } from '@apollo/client';
import { Anton_400Regular, useFonts } from '@expo-google-fonts/anton';
import { Slot, SplashScreen } from 'expo-router';
import React, { useCallback, useEffect, useState } from 'react';
import { View } from 'react-native';
import { getApolloClient } from '../src/graphql';

SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const [fontsLoaded] = useFonts({
    Anton_400Regular,
  });
  const [apolloClient, setApolloClient] = useState<ApolloClient<NormalizedCacheObject>|null>(null);

  useEffect(() => {
    if (!apolloClient) {
      (async () => {
        setApolloClient(await getApolloClient());
      })();
    }
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded && apolloClient) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, apolloClient]);

  if (!fontsLoaded || !apolloClient) {
    return null;
  }

  return (
    <View onLayout={onLayoutRootView} style={{ flex: 1 }}>
      <ApolloProvider client={apolloClient}>
        <Slot />
      </ApolloProvider>
    </View>
  );
}
