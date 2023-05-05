import { useEffect, useState } from 'react';
import { ArrowRight, Navigation, LineHorizontal1, Mail } from '@styled-icons/fluentui-system-filled';
import { useLocation } from 'react-router-dom';
import HeaderStyled from './Header.styles';
import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';
import BodyOverlay from '../BodyOverlay/BodyOverlay';
import Button from '../Button/Button';

function Header() {
  const [showNavigation, setShowNavigation] = useState(false);
  const { pathname } = useLocation();

  const toggleNavigation = () => {
    setShowNavigation((prevShowNavigation: boolean) => !prevShowNavigation);
  };
  useEffect(() => {
    setShowNavigation(false);
  }, [pathname]);

  return (
    <HeaderStyled>
      <Logo isUppercase />
      <Button
        role="link"
        variant="secondary"
        Icon={ArrowRight}
        text="Contact"
        to="/contact"
        className="header_contact"
      />
      <Button role="link" variant="primary" Icon={Mail} to="/contact" className="header_m-contact" />
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
          <BodyOverlay onClickAction={toggleNavigation} />
        </>
      )}
    </HeaderStyled>
  );
}

export default Header;
