// Dependencies
import { type StyledIcon } from '@styled-icons/styled-icon';
import { type FlattenSimpleInterpolation } from 'styled-components';
// Types
import type { Props as TagProps } from '@components/shared/Tag/Tag';
import type { Props as TextProps } from '@components/shared/Text/Text.types';
import type { Props as ButtonProps } from '@components/shared/Button/Button.types';
import { type Props as CustomIconProps } from '@components/shared/CustomIcon/CustomIcon.types';
// eslint-disable-next-line max-len
import type { Props as ImageResponsiveProps } from '@components/shared/ImageResponsive/ImageResponsive.types';
import { type KeyId } from '@/types/general.types';
import type { NeutralColorCSSVar } from '@/types/general.types';

type CardTagWithKeyId = KeyId & {
  variant: TagProps['variant'];
  children: TagProps['children'];
};

export type CardHeaderProps = {
  headerLayout?: NonNullable<Props['$styles']>['headerLayout'];
};

export type CardContainerProps = {
  customStyles?: Props['customStyles'];
  bgColor?: NonNullable<Props['$styles']>['bgColor'];
  borderColor?: NonNullable<Props['$styles']>['borderColor'];
};

export type Props = {
  className?: string;
  customStyles?: FlattenSimpleInterpolation;
  $styles?: {
    headerLayout?: 'default' | 'compact';
    bgColor?: NeutralColorCSSVar | 'transparent';
    borderColor?: NeutralColorCSSVar | 'transparent' | 'noBorder';
  };
  absoluteImg?: Pick<ImageResponsiveProps, 'src'>;
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
