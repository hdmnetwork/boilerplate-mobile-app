import React, { useEffect, useState } from 'react';
import { KeyboardTypeOptions, TextInput, View } from 'react-native';
import UiText from '../typography/UiText';

interface Props {
  label?: string,
  defaultValue?: string,
  value?: string,
  secureTextEntry?: boolean,
  required?: boolean,
  placeholder?: string,
  placeholderColor?: string,
  multiline?: boolean,
  numberOfLines?: number,
  keyboardType?: KeyboardTypeOptions,
  onChange?: (value: string) => void,
  inputStyle?: any,
  mr?: number,
  ml?: number,
  mt?: number,
  mb?: number,
}

const UiTextField = (props: Props) => {
  const [value, setValue] = useState<undefined|string>(props.value);

  useEffect(() => {
    if (props.value !== value) {
      setValue(props.value);
    }
  }, [props.value]);

  return (
    <View
      style={{
        marginTop: props.mt ?? undefined,
        marginBottom: props.mb ?? undefined,
        marginLeft: props.ml ?? undefined,
        marginRight: props.mr ?? undefined,
      }}
    >
      {
        props.label && (
          <UiText textAlign="left" color="black" mb={2} w="100%" fontSize={15}>
            { props.label }
            {
              props.required && (
                <>
                  { ' ' }
                  <UiText color="red" fontSize={15}>*</UiText>
                </>
              )
            }
          </UiText>
        )
      }
      <TextInput
        keyboardType={props.keyboardType}
        style={{
          width: '100%',
          borderColor: "black",
          borderWidth: 1,
          borderRadius: 5,
          textAlignVertical: props.multiline ? 'top' : 'center',
          padding: 5,
          ...(props.inputStyle ? { ...props.inputStyle } : {}),
        }}
        secureTextEntry={props.secureTextEntry ?? false}
        numberOfLines={props.numberOfLines}
        onChangeText={(text) => {
          setValue(text);
          props.onChange?.(text);
        }}
        placeholder={props.placeholder}
        placeholderTextColor={props.placeholderColor}
        defaultValue={props.defaultValue}
        multiline={props.multiline}
        value={value}
      />
    </View>
  );
};

export default UiTextField;
