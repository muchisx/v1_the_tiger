import { type FlattenSimpleInterpolation } from 'styled-components';
import { type StyledIcon } from '@styled-icons/styled-icon';
import { type Props as CustomIconProps } from '../shared/CustomIcon/CustomIcon.types';
import type { Props as TagProps } from '../shared/Tag/Tag';
import type { Props as TextProps } from '../shared/Text/Text.types';
import type { Props as ButtonProps } from '../shared/Button/Button.types';

type CardTagWithId = {
  id: string | number;
  variant: TagProps['variant'];
  text: TagProps['children'];
};

export type CardContainerProps = {
  customStyles?: Props['customStyles'];
};

export type Props = {
  className?: string;
  customStyles?: FlattenSimpleInterpolation;
  backgroundImg?: string;
  cardLinkWrap?: {
    to: string;
    newTab?: boolean;
    rel?: string;
  };
  HeaderIcon?: StyledIcon | CustomIconProps['svgrIcon'];
  headerHeading?: string;
  headerTags?: CardTagWithId[];
  bodyText?: TextProps;
  footerButton?: ButtonProps;
};
