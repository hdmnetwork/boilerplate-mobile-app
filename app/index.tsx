import { ApolloError } from '@apollo/client';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';
import { useEffect, useMemo, useState } from 'react';
import { Image, ScrollView } from 'react-native';
import AppInitializationProvider from '../src/components/providers/AppInitializationProvider';
import UiButton from '../src/components/ui-kit/form/UiButton';
import UiTextField from '../src/components/ui-kit/form/UiTextField';
import VStack from '../src/components/ui-kit/layout/flex/VStack';
import Screen from '../src/components/ui-kit/layout/Screen';
import UiText from '../src/components/ui-kit/typography/UiText';
import { useLoginLazyQuery } from '../src/graphql';
import useAuthentication from '../src/hooks/useAuthentication';
import useFormValidation, { FieldValidation, FieldValidationRuleType } from '../src/hooks/useFormValidation';

const formValidation: FieldValidation<'email' | 'password'>[] = [
  { field: 'email', rules: [{ type: FieldValidationRuleType.MANDATORY }, { type: FieldValidationRuleType.EMAIL }] },
  { field: 'password', rules: [{ type: FieldValidationRuleType.MANDATORY }] },
];

export default function Page() {
  const authenticate = useAuthentication();
  const [{ validateForm }, validations] = useFormValidation(formValidation);
  const [form, setForm] = useState({ email: '', password: '' });
  const [login, { data, loading: isLogging, error: apiError }] = useLoginLazyQuery();
  const [externalError, setExternalError] = useState<ApolloError|undefined>(undefined);
  const isPasswordInvalid = useMemo(() => externalError?.message === 'Invalid password', [externalError]);
  const isButtonDisabled = useMemo(() => form.email === ''
    || form.password === ''
    || validations.email.invalidRules.length > 0
    || validations.password.invalidRules.length > 0
    || isPasswordInvalid
    || isLogging, [form, validations, isPasswordInvalid, isLogging]);

  const handleOnChange = (key: 'email' | 'password', value: string) => {
    setForm({ ...form, [key]: value });
    setExternalError(undefined);
    validateForm(form);
  };

  const handleOnPress = async () => {
    if (isLogging || validations.email.invalidRules.length > 0 || validations.password.invalidRules.length > 0) {
      return;
    }

    await login({ variables: { ...form } });
  };

  useEffect(() => {
    if (data && data.login) {
      (async () => {
        await AsyncStorage.setItem('@boilerplateapp_token', data.login);
        if (await authenticate(data.login)) {
          router.replace('/online');
        }
      })();
    }
  }, [data]);

  return (
    <AppInitializationProvider>
      <Screen barStatusColor="white">
        <ScrollView>
          <Image
            source={require('../assets/icon.png')}
            style={{
              width: 150,
              height: 150,
              alignSelf: 'center',
              marginTop: 20,
              marginBottom: 20,
            }}
          />
          <VStack w="90%" alignSelf="center">
            <UiText textAlign="center" fontSize={20}>Your App Name</UiText>
            <UiTextField
              keyboardType="email-address"
              mt={20}
              label="E-mail"
              value={form.email}
              onChange={(text) => handleOnChange('email', text)}
              required
            />
            <UiTextField
              mt={20}
              label="Mot de passe"
              value={form.password}
              onChange={(text) => handleOnChange('password', text)}
              required
              secureTextEntry
            />
            <UiButton text="Se connecter" onPress={handleOnPress} disabled={isButtonDisabled} />
          </VStack>
        </ScrollView>
      </Screen>
    </AppInitializationProvider>
  );
}
