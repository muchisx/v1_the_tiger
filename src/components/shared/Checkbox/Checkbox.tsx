import { InputHTMLAttributes, forwardRef } from 'react';
import ConditionalWrapper from '../ConditionalContainer/ConditionalContainer';
import Label from '../Label/Label';

/* eslint-disable jsx-a11y/label-has-associated-control */
type Props = {
  label?: React.ReactNode;
} & InputHTMLAttributes<HTMLInputElement>;

function ConditionalLabel(children: JSX.Element) {
  return <Label>{children}</Label>;
}

const Checkbox = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { label, type, ...attrs } = props;

  // TODO: Find a way to avoid the fragment
  return (
    <ConditionalWrapper condition={label} wrapper={ConditionalLabel}>
      <>
        <input type="checkbox" ref={ref} {...attrs} />
        {label}
      </>
    </ConditionalWrapper>
  );
});

Checkbox.displayName = 'Checkbox';

export default Checkbox;
