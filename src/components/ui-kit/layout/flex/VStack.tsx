import { ViewProps } from "react-native";

import Flex from "./Flex";
import {
  DimensionShortcutProps,
  FlexShortcutProps,
  MarginShortcutProps,
  PaddingShortcutProps,
} from "./index";

type ShortcutProps = Partial<FlexShortcutProps> &
  Partial<DimensionShortcutProps> &
  Partial<MarginShortcutProps> &
  Partial<PaddingShortcutProps>;

interface Props extends ViewProps, ShortcutProps {}

const VStack = ({ ...props }: Props) => <Flex {...props} direction="column" />;

export default VStack;
