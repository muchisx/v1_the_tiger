import { type Props as ButtonProps } from '../Button/Button.types';
import { type Props as TextProps } from '../Text/Text.types';

type ButtonWithIdProps = { id: number } & ButtonProps;
type TextWithIdProps = { id: number } & TextProps;

export type Props = {
  leftContent: {
    topButton: ButtonProps;
    maskedImageURL?: string;
    backgroundShapeURL?: string;
    buttonListLabel?: string;
    leftButtonList?: ButtonWithIdProps[];
  };
  rightContent: {
    textsList?: TextWithIdProps[];
    rightButtonList: ButtonWithIdProps[];
  };
};
