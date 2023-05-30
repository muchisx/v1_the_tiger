import { type StyledIcon } from '@styled-icons/styled-icon';
import { type Props as CustomIconProps } from '../shared/CustomIcon/CustomIcon.types';
import type { Props as TagProps } from '../shared/Tag/Tag';

type CardTagWithId = {
  id: string | number;
  variant: TagProps['variant'];
  text: TagProps['children'];
};

export type Props = {
  HeaderIcon?: StyledIcon | CustomIconProps['svgrIcon'];
  headerHeading?: string;
  tags?: CardTagWithId[];
};
