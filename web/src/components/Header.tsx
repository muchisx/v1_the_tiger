import HeaderStyled from './styled/HeaderStyled';
import Logo from './Logo';
import Button from './Button';

function Header() {
  return (
    <HeaderStyled>
      <Logo isUppercase />
      <Button text="Contact" variant="secondary" role="link" to="/contact" />
      <Button role="button" variant="secondary" />
    </HeaderStyled>
  );
}

export default Header;
