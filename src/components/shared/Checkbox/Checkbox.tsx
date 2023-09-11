// Dependencies
import styled from 'styled-components';
import { InputHTMLAttributes, forwardRef } from 'react';
// Components
import Text from '@components/shared/Text/Text';

/* eslint-disable jsx-a11y/label-has-associated-control */
type Props = {
  label?: React.ReactNode;
  isError?: boolean;
  errorMessage?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const LabelStyled = styled(Text)`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
`;

const CheckBox = styled.input`
  cursor: pointer;
`;

const Checkbox = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { label, type, isError, errorMessage, ...attrs } = props;

  return (
    <LabelStyled tag="label" className={`form-field__${attrs.name}`}>
      <CheckBox type="checkbox" ref={ref} {...attrs} />
      <Text>{label}</Text>
      {isError && <Text fontSize="1.4rem">{errorMessage}</Text>}
    </LabelStyled>
  );
});

Checkbox.displayName = 'Checkbox';

export default Checkbox;
