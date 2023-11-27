import { Pressable, PressableProps } from "react-native";

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

export default ({ ...props }: Props) => (
  <Pressable
    {...props}
    style={{
      flexDirection: props.direction ?? "row",
      flex: props.flex,
      alignItems: props.alignItems,
      alignSelf: props.alignSelf,
      justifyContent: props.justifyContent,
      gap: props.gap,
      marginTop: props.mt,
      marginBottom: props.mb,
      marginLeft: props.ml,
      marginRight: props.mr,
      padding: props.padding,
      paddingTop: props.pt,
      paddingBottom: props.pb,
      paddingLeft: props.pl,
      paddingRight: props.pr,
      width: props.w,
      height: props.h,
      maxWidth: props.maxW,
      maxHeight: props.maxH,
      ...props.style,
    }}
  >
    {props.children}
  </Pressable>
);
