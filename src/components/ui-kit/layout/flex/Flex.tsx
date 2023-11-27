import { View } from 'react-native';
import { FlexComponentProps } from './index';

export default ({ ...props }: FlexComponentProps) => (
  <View
    {...props}
    style={{
      flexDirection: props.direction ?? 'row',
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
      backgroundColor: props.backgroundColor,
      ...(props.style as any),
    }}
  >
    {props.children}
  </View>
);
