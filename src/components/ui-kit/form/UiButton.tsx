import { router } from 'expo-router';
import React, { ReactNode } from 'react';
import PressableHStack from '../layout/flex/PressableHStack';
import UiText from '../typography/UiText';

interface Props {
  text?: string,
  children?: ReactNode,
  to?: string,
  mt?: number,
  mb?: number,
  mr?: number,
  ml?: number,
  onPress?: () => void,
  textColor?: string,
  bgColor?: string,
  borderColor?: string,
  borderWidth?: number,
  style?: any,
  _textStyle?: any,
  disabled?: boolean,
}

const UiButton = ({
  text, to = '', mt = 20, mb = 0, mr = 0, ml = 0, textColor = 'white', bgColor = '#F15A5B', borderColor, borderWidth, children, style, _textStyle, disabled = false, onPress,
}: Props) => (
  <PressableHStack
    onPress={() => {
      if (disabled) {
        return;
      }

      if (to && to !== '') {
        router.push(to);

        return;
      }

      onPress?.();
    }}
    alignSelf="center"
    padding={10}
    pl={20}
    pr={20}
    mt={mt}
    mb={mb}
    mr={mr}
    ml={ml}
    style={{
      borderColor: disabled ? 'grey' : borderColor,
      borderWidth,
      backgroundColor: disabled ? 'grey' : bgColor,
      borderRadius: 30,
      ...style,
    }}
  >
    { children === undefined && text !== undefined && <UiText color={textColor} fontSize={15} style={_textStyle}>{ text }</UiText> }
    { children !== undefined && text === undefined && children }
  </PressableHStack>
);

export default UiButton;
