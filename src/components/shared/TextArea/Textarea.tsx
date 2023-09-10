/* eslint-disable jsx-a11y/label-has-associated-control */
// Dependencies
import styled from 'styled-components';
import { TextareaHTMLAttributes, forwardRef } from 'react';
// Components
import Label from '../Label/Label';
import ConditionalWrapper from '../ConditionalContainer/ConditionalContainer';
// Types
import type { Resize } from '@/types/css.types';

type TextAreaElProps = {
  $resize?: Props['resize'];
};

type Props = {
  label?: React.ReactNode;
  resize?: Resize;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

const TextAreaStyled = styled.textarea<TextAreaElProps>`
  padding-block: 1.2rem;
  padding-inline: 0.4rem;
  border-bottom: 1px solid var(--neutral-color-quaternary);
  resize: ${(props) => props.$resize};
  transition: border 0.2s ease-in-out;

  ::placeholder {
    font-size: 1.4rem;
  }

  :focus {
    outline: 0;
    border-bottom-color: var(--neutral-color-tertiary);
  }
`;

function ConditionalLabel(children: JSX.Element) {
  return <Label>{children}</Label>;
}

const TextArea = forwardRef<HTMLTextAreaElement, Props>((props, ref) => {
  const { label, resize, ...attrs } = props;

  // TODO: Find a way to avoid the fragment
  return (
    <ConditionalWrapper condition={label} wrapper={ConditionalLabel}>
      <>
        <TextAreaStyled $resize={resize} ref={ref} {...attrs} />
        {label}
      </>
    </ConditionalWrapper>
  );
});

TextArea.displayName = 'TextArea';

export default TextArea;
