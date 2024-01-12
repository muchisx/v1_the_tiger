// Dependencies
import { createPortal } from 'react-dom';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  Navigation,
  LineHorizontal1,
  Mail,
} from '@styled-icons/fluentui-system-filled';
// Components
import Nav from '../Nav/Nav';
import Logo from '../shared/Logo/Logo';
import Button from '../shared/Button/Button';
import BodyOverlay from '../shared/BodyOverlay/BodyOverlay';
// Styled Components
import HeaderStyled from './Header.styles';

function Header() {
  const [showNavigation, setShowNavigation] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setShowNavigation(false);
  }, [pathname]);

  return (
    <HeaderStyled showBg={!showNavigation}>
      <Logo isUppercase />
      <Button
        buttonRole="link"
        variant="secondary"
        Icon={ArrowRight}
        text="Contact"
        to="/contact"
        className="header_contact"
      />
      <Button
        buttonRole="link"
        variant="primary"
        Icon={Mail}
        to="/contact"
        className="header_m-contact"
      />
      {showNavigation ? (
        <Button
          buttonRole="button"
          variant="primary"
          Icon={LineHorizontal1}
          action={() => setShowNavigation(false)}
          className="header-nav-toggle --open"
        />
      ) : (
        <Button
          buttonRole="button"
          variant="secondary"
          Icon={Navigation}
          action={() => setShowNavigation(true)}
          className="header-nav-toggle"
        />
      )}
      <AnimatePresence>
        {showNavigation && (
          <>
            <Nav key="nav-bar" />
            {createPortal(
              <BodyOverlay onClickAction={() => setShowNavigation(false)} key="body-lock" />,
              document.getElementById('bodylock-portal') as HTMLElement
            )}
          </>
        )}
      </AnimatePresence>
    </HeaderStyled>
  );
}

export default Header;
