/* eslint-disable jsx-a11y/label-has-associated-control */
// Dependencies
import styled from 'styled-components';
import { InputHTMLAttributes, forwardRef } from 'react';
// Components
import Label from '@components/shared/Label/Label';
import ConditionalWrapper from '@components/shared/ConditionalContainer/ConditionalContainer';

type Props = {
  label?: React.ReactNode;
  type: 'text' | 'email' | 'password' | 'search' | 'tel' | 'url' | 'number';
} & InputHTMLAttributes<HTMLInputElement>;

const InputStyled = styled.input`
  padding-block: 1.2rem;
  padding-inline: 0.4rem;
  background-color: transparent;
  border-bottom: 1px solid var(--neutral-color-quaternary);
  transition: border 0.2s ease-in-out;

  ::placeholder {
    font-size: 1.4rem;
  }

  :focus-visible {
    outline: 0;
    border-bottom-color: var(--neutral-color-tertiary);
  }
`;

function ConditionalLabel(children: JSX.Element) {
  return <Label>{children}</Label>;
}

const InputText = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { label, type, ...attrs } = props;

  // TODO: Find a way to avoid the fragment
  return (
    <ConditionalWrapper condition={label} wrapper={ConditionalLabel}>
      <>
        <InputStyled type={type} ref={ref} {...attrs} />
        {label}
      </>
    </ConditionalWrapper>
  );
});

InputText.displayName = 'InputText';

export default InputText;
