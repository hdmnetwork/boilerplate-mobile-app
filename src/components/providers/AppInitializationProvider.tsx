import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';
import { ReactNode, useEffect, useState } from 'react';
import { apolloClient } from '../../graphql';
import useAuthentication from '../../hooks/useAuthentication';
import Screen from '../ui-kit/layout/Screen';
import Loader from '../ui-kit/utils/Loader';

const AppInitializationProvider = ({ children }: { children: ReactNode }) => {
  const client = apolloClient();
  const authenticate = useAuthentication();
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (!client) {
      return;
    }

    (async () => {
      try {
        if (!(await authenticate((await AsyncStorage.getItem('@boilerplateapp_token')) || ''))) {
          throw new Error('Error occurred during authentication');
        }

        router.replace('/online');
      } catch (error) {
        setHasError(true);
      }
    })();
  }, [client]);

  if (hasError) {
    return (
      <>
        { children }
      </>
    );
  }

  return (
    <Screen>
      <Loader />
    </Screen>
  );
};

export default AppInitializationProvider;
