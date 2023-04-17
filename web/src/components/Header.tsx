import { useState } from 'react';
import { ArrowRight, Navigation, LineHorizontal1 } from '@styled-icons/fluentui-system-filled';
import HeaderStyled from './styled/HeaderStyled';
import Logo from './Logo';
import Button from './Button';
import Nav from './Nav';
import BodyOverlay from './BodyOverlay';

function Header() {
  const [showNavigation, setShowNavigation] = useState(false);

  const toggleNavigation = () => {
    setShowNavigation((state) => !state);
  };

  return (
    <HeaderStyled>
      <Logo isUppercase />
      <Button role="link" variant="secondary" Icon={ArrowRight} text="Contact" to="/contact" />
      {showNavigation ? (
        <Button
          role="button"
          variant="primary"
          Icon={LineHorizontal1}
          action={toggleNavigation}
          className="header-nav-toggle"
        />
      ) : (
        <Button
          role="button"
          variant="secondary"
          Icon={Navigation}
          action={toggleNavigation}
          className="header-nav-toggle"
        />
      )}

      {showNavigation && (
        <>
          <Nav />
          <BodyOverlay />
        </>
      )}
    </HeaderStyled>
  );
}

export default Header;
