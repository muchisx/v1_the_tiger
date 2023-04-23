import NavItemStyled, { type StyledProps } from './styled/NavItemStyled';

type Props = {
  text: StyledProps['text'];
  to: StyledProps['to'];
  Icon?: StyledProps['Icon'];
};

function NavItem(props: Props) {
  const { text, Icon, to } = props;
  return <NavItemStyled text={text} Icon={Icon} to={to} />;
}

NavItem.defaultProps = {
  Icon: undefined,
};

export default NavItem;
