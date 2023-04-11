import { ArrowRight, Navigation } from '@styled-icons/fluentui-system-filled';
import HeaderStyled from './styled/HeaderStyled';
import Logo from './Logo';
import Button from './Button';

function Header() {
  return (
    <HeaderStyled>
      <Logo isUppercase />
      <Button text="Contact" variant="secondary" role="link" to="/contact" Icon={ArrowRight} />
      <Button role="button" variant="secondary" Icon={Navigation} />
    </HeaderStyled>
  );
}

export default Header;
