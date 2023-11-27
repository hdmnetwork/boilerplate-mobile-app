import React from 'react';
import HStack from '../layout/flex/HStack';
import UiText from '../typography/UiText';

interface Props {
  justifyContent?: 'center' | 'flex-start';
  alignItems?: 'center' | 'flex-start';
  backgroundColor?: string;
  _containerStyle?: any;
}

const Loader: React.FC<Props> = ({
  justifyContent = 'center',
  alignItems = 'center',
  backgroundColor = 'white',
  _containerStyle = undefined,
}) => (
  <HStack
    h="100%"
    justifyContent={justifyContent}
    alignItems={alignItems}
    backgroundColor={backgroundColor}
    style={{ ..._containerStyle }}
  >
    <UiText>Chargement...</UiText>
  </HStack>
);

export default Loader;
