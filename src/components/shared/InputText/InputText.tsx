/* eslint-disable jsx-a11y/label-has-associated-control */
// Dependencies
import styled from 'styled-components';
import { InputHTMLAttributes, forwardRef } from 'react';
// Components
import Text from '@components/shared/Text/Text';

type InputElProps = {
  $isError?: Props['isError'];
};

type Props = {
  label?: React.ReactNode;
  type: 'text' | 'email' | 'password' | 'search' | 'tel' | 'url' | 'number';
  isError?: boolean;
  errorMessage?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const InputStyled = styled.input<InputElProps>`
  width: 100%;
  padding-block: 1.2rem;
  padding-inline: 0.4rem;
  background-color: transparent;
  transition: border 0.2s ease-in-out;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: ${(props) => (props.$isError ? 'var(--accent-color)' : 'var(--neutral-color-quaternary)')};

  ::placeholder {
    font-size: 1.4rem;
  }

  :focus-visible {
    outline: 0;
    border-bottom-color: var(--neutral-color-tertiary);
  }
`;

const LabelStyled = styled(Text)`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const InputText = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { label, type, isError, errorMessage, ...attrs } = props;

  return (
    <LabelStyled tag="label" className={`form-field__${attrs.name}`}>
      <Text>{label}</Text>
      <InputStyled type={type} ref={ref} {...attrs} $isError={isError} />
      {isError && <Text fontSize="1.4rem">{errorMessage}</Text>}
    </LabelStyled>
  );
});

InputText.displayName = 'InputText';

export default InputText;
