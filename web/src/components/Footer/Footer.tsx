import { Chat } from '@styled-icons/fluentui-system-filled';
import Button from '../Button/Button';
import Logo from '../Logo/Logo';
import Section from '../Section/Section';

import { FooterStyled, FooterBlock, FooterItem, sectionCSS } from './Footer.styles';

function Footer() {
  return (
    <FooterStyled>
      <Section contain enableGutter css={sectionCSS}>
        <FooterBlock>
          <Logo isUppercase />
        </FooterBlock>
        <FooterBlock>
          <FooterItem to="/work">Work</FooterItem>
          <FooterItem to="/services">Services</FooterItem>
          <FooterItem to="/about">About</FooterItem>
          <FooterItem to="/web-dev">Web Development</FooterItem>
          <FooterItem to="/shopify">Shopify Development</FooterItem>
          <FooterItem to="/contact">Book a free call</FooterItem>
          <FooterItem to="/contact">Contact</FooterItem>
        </FooterBlock>
        <FooterBlock>
          <Button
            text="miguel.angel.creator@gmail.com"
            variant="quaternary"
            role="link"
            to="mailto:miguel.angel.creator@gmail.com?subject=Miguel!%20-%20Help%20me%20with:%20"
          />
          <Button Icon={Chat} text="Telegram" variant="quaternary" role="link" to="https://t.me/muchisx" newTab />
        </FooterBlock>
      </Section>
    </FooterStyled>
  );
}

export default Footer;
