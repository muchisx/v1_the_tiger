import NavItemStyled, { type StyledProps } from './styled/NavItemStyled';

type Props = {
  text: StyledProps['text'];
  to: StyledProps['to'];
  Icon?: StyledProps['Icon'];
  newTab?: StyledProps['newTab'];
  rel?: StyledProps['rel'];
};

function NavItem(props: Props) {
  const { text, Icon, to, newTab, rel } = props;
  return <NavItemStyled text={text} Icon={Icon} to={to} newTab={newTab} rel={rel} />;
}

NavItem.defaultProps = {
  Icon: undefined,
  newTab: false,
  rel: 'noopener noreferrer',
};

export default NavItem;
