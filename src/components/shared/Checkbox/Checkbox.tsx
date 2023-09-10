// Dependencies
import styled from 'styled-components';
import { InputHTMLAttributes, forwardRef } from 'react';
// Components
import Label from '@components/shared/Label/Label';
import ConditionalWrapper from '@components/shared/ConditionalContainer/ConditionalContainer';

/* eslint-disable jsx-a11y/label-has-associated-control */
type Props = {
  label?: React.ReactNode;
} & InputHTMLAttributes<HTMLInputElement>;

const CheckBoxLabel = styled(Label)`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const CheckBox = styled.input`
  cursor: pointer;
`;

function ConditionalLabel(children: JSX.Element) {
  return <CheckBoxLabel>{children}</CheckBoxLabel>;
}

const Checkbox = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { label, type, ...attrs } = props;

  // TODO: Find a way to avoid the fragment
  return (
    <ConditionalWrapper condition={label} wrapper={ConditionalLabel}>
      <>
        <CheckBox type="checkbox" ref={ref} {...attrs} />
        {label}
      </>
    </ConditionalWrapper>
  );
});

Checkbox.displayName = 'Checkbox';

export default Checkbox;
