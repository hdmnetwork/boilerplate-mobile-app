import Flex from './Flex';
import { FlexComponentProps } from './index';

const HStack = ({ ...props }: FlexComponentProps) => <Flex {...props} direction="row" />;

export default HStack;
