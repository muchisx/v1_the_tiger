/* eslint-disable jsx-a11y/label-has-associated-control */
// Dependencies
import styled from 'styled-components';
import { TextareaHTMLAttributes, forwardRef } from 'react';
// Components
import Text from '@components/shared/Text/Text';
// Types
import type { Resize } from '@/types/css.types';

type TextAreaElProps = {
  $resize?: Props['resize'];
  $isError?: Props['isError'];
};

type Props = {
  label?: React.ReactNode;
  resize?: Resize;
  isError?: boolean;
  errorMessage?: string;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

const TextAreaStyled = styled.textarea<TextAreaElProps>`
  width: 100%;
  padding-block: 1.2rem;
  padding-inline: 0.4rem;
  background-color: transparent;
  transition: border 0.2s ease-in-out;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: ${(props) => (props.$isError ? 'var(--accent-color)' : 'var(--neutral-color-quaternary)')};

  resize: ${(props) => props.$resize};

  ::placeholder {
    font-size: 1.4rem;
  }

  :focus {
    outline: 0;
    border-bottom-color: var(--neutral-color-tertiary);
  }
`;

const LabelStyled = styled(Text)`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const TextArea = forwardRef<HTMLTextAreaElement, Props>((props, ref) => {
  const { label, resize, isError, errorMessage, ...attrs } = props;

  return (
    <LabelStyled tag="label" className={`form-field__${attrs.name}`}>
      <Text>{label}</Text>
      <TextAreaStyled $resize={resize} ref={ref} {...attrs} $isError={isError} />
      {isError && <Text fontSize="1.4rem">{errorMessage}</Text>}
    </LabelStyled>
  );
});

TextArea.displayName = 'TextArea';

export default TextArea;
