import { userConnected } from '../../../graphql';
import Screen from '../../ui-kit/layout/Screen';
import UiText from '../../ui-kit/typography/UiText';

const HomeScreen = () => (
  <Screen>
    <UiText>
      Hello
      &nbsp;
      { userConnected()?.email }
    </UiText>
  </Screen>
);

export default HomeScreen;
