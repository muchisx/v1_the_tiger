import { useState } from 'react';
import { ArrowRight, Navigation } from '@styled-icons/fluentui-system-filled';
import HeaderStyled from './styled/HeaderStyled';
import Logo from './Logo';
import Button from './Button';
import Nav from './Nav';

function Header() {
  const [showNavigation, setShowNavigation] = useState(false);

  const toggleNavigation = () => {
    setShowNavigation((state) => !state);
  };

  return (
    <HeaderStyled>
      <Logo isUppercase />
      <Button text="Contact" variant="secondary" role="link" to="/contact" Icon={ArrowRight} />
      <Button role="button" variant="secondary" Icon={Navigation} action={toggleNavigation} />

      {showNavigation && (
        <>
          <Nav />
        </>
      )}
    </HeaderStyled>
  );
}

export default Header;
