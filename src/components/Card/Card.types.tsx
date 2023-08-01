// Dependencies
import { type FlattenSimpleInterpolation } from 'styled-components';
import { type StyledIcon } from '@styled-icons/styled-icon';
// Types
import type { Props as TagProps } from '@components/shared/Tag/Tag';
import type { Props as TextProps } from '@components/shared/Text/Text.types';
import type { Props as ButtonProps } from '@components/shared/Button/Button.types';
import { type Props as CustomIconProps } from '@components/shared/CustomIcon/CustomIcon.types';
import type { Props as ImageResponsiveProps } from '@components/shared/ImageResponsive/ImageResponsive.types';
import { type KeyId } from '@/types/general.types';

type CardTagWithKeyId = KeyId & {
  variant: TagProps['variant'];
  children: TagProps['children'];
};

export type CardContainerProps = {
  customStyles?: Props['customStyles'];
};

export type Props = {
  className?: string;
  customStyles?: FlattenSimpleInterpolation;
  backgroundImg?: Pick<ImageResponsiveProps, 'src' | 'position' | 'loading'>;
  cardLinkWrap?: {
    to: string;
    newTab?: boolean;
    rel?: string;
  };
  HeaderIcon?: StyledIcon | CustomIconProps['svgrIcon'];
  headerHeading?: string;
  headerTags?: CardTagWithKeyId[];
  bodyText?: TextProps;
  footerButton?: ButtonProps;
};
