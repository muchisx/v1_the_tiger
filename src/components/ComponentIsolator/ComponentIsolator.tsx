import ComponentIsolatorStyled from './ComponentIsolator.styles';

type Props = {
  children: React.ReactNode;
};

function ComponentIsolator(props: Props) {
  const { children } = props;
  return <ComponentIsolatorStyled>{children}</ComponentIsolatorStyled>;
}

export default ComponentIsolator;
