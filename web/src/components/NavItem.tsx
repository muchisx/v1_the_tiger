import { StyledIcon } from '@styled-icons/styled-icon';
import NavItemStyled from './styled/NavItemStyled';

type Props = {
  text: string;
  to: string;
  Icon?: StyledIcon;
};

function NavItem(props: Props) {
  const { text, Icon, to } = props;
  return <NavItemStyled text={text} Icon={Icon} to={to} />;
}

NavItem.defaultProps = {
  Icon: undefined,
};

export default NavItem;
