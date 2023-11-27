import React, { ReactNode } from 'react';
import { Text, TextProps } from 'react-native';

import { FlexShortcutProps } from '../layout/flex';

const fontMapping = {
  AntonRegular: 'Anton_400Regular',
};

type ComponentProps = TextProps & FlexShortcutProps;

interface Props extends ComponentProps {
  type?: 'AntonRegular',
  w?: number | string,
  fontSize?: number,
  color?: string,
  textAlign?: 'left' | 'right' | 'justify' | 'center',
  textTransform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase',
  mr?: number,
  ml?: number,
  mt?: number,
  mb?: number,
  pr?: number,
  pl?: number,
  pt?: number,
  pb?: number,
  children: ReactNode | string,
}

export default (props: Props) => (
  <Text
    {...props}
    style={{
      width: props.w,
      fontFamily: props.type
        ? fontMapping[props.type]
        : fontMapping.AntonRegular,
      fontSize: props.fontSize ?? 12,
      color: props.color ?? 'black',
      textTransform: props.textTransform ?? 'none',
      marginTop: props.mt ?? 0,
      marginBottom: props.mb ?? 0,
      marginLeft: props.ml ?? 0,
      marginRight: props.mr ?? 0,
      paddingTop: props.pt ?? undefined,
      paddingBottom: props.pb ?? undefined,
      paddingLeft: props.pl ?? undefined,
      paddingRight: props.pr ?? undefined,
      textAlign: props.textAlign ?? 'auto',
      alignSelf: props.alignSelf,
      alignItems: props.alignItems,
      justifyContent: props.justifyContent,
      ...(props.style ? (props.style as object) : {}),
    } as any}
  >
    {props.children}
  </Text>
);
