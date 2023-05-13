import { type FlattenSimpleInterpolation } from 'styled-components';
import { type Props as ButtonProps } from '../Button/Button.types';
import { type Props as TextProps } from '../Text/Text.types';

type ButtonWithIdProps = { id: number } & ButtonProps;
type TextWithIdProps = { id: number } & TextProps;

export type Props = {
  leftContent: {
    topButton?: ButtonProps;
    leftTextList?: TextWithIdProps[];
    maskedImageURL?: string;
    backgroundShapeURL?: string;
    buttonListLabel?: string;
    leftButtonList?: ButtonWithIdProps[];
  };
  rightContent: {
    rightTextsList?: TextWithIdProps[];
    rightButtonList?: ButtonWithIdProps[];
  };
  customStyles?: FlattenSimpleInterpolation;
};
