import { ViewProps } from 'react-native';

export interface MarginShortcutProps {
  margin: number;
  mt: number;
  mb: number;
  mr: number;
  ml: number;
}
export interface PaddingShortcutProps {
  padding: number;
  pt: number;
  pb: number;
  pr: number;
  pl: number;
}

export interface DimensionShortcutProps {
  w: number | string;
  h: number | string;
  maxW: number | string;
  maxH: number | string;
}

export interface FlexShortcutProps {
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  flex?: number;
  alignItems?: 'center' | 'flex-start' | 'flex-end' | 'baseline';
  alignSelf?: 'center' | 'flex-start' | 'flex-end' | 'baseline';
  justifyContent?:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'baseline'
    | 'space-between'
    | 'space-around';
  gap?: number;
}

export type FlexComponentProps = ViewProps & Partial<FlexShortcutProps> &
  Partial<DimensionShortcutProps> &
  Partial<MarginShortcutProps> &
  Partial<PaddingShortcutProps> &
  { backgroundColor?: string }
