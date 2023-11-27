import { PressableProps } from "react-native";

import PressableFlex from "./PressableFlex";
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

interface Props extends PressableProps, ShortcutProps {}

const HStack = ({ ...props }: Props) => (
  <PressableFlex {...props} direction="row" />
);

export default HStack;
