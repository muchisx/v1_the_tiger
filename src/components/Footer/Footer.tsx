// Dependencies
import { Link } from 'react-router-dom';
import { Chat } from '@styled-icons/fluentui-system-filled';
// Components
import Logo from '@components/shared/Logo/Logo';
import Text from '@components/shared/Text/Text';
import Button from '@components/shared/Button/Button';
import Section from '@components/shared/Section/Section';
// Styled Components
import {
  FooterStyled,
  FooterBlock,
  FooterMenuItem,
  footerBodyCSS,
  FooterMenu,
  footerBottomCSS,
} from './Footer.styles';

function Footer() {
  return (
    <FooterStyled>
      <Section contain enableGutter customStyles={footerBodyCSS}>
        <FooterBlock className="footer__logo">
          <Logo isUppercase fontSize="2.8rem" />
        </FooterBlock>
        <FooterBlock className="footer__menus">
          <FooterMenu>
            <FooterMenuItem>
              <Link to="/work">Work</Link>
            </FooterMenuItem>
            <FooterMenuItem>
              <Link to="/services">Services</Link>
            </FooterMenuItem>
            <FooterMenuItem>
              <Link to="/about">About</Link>
            </FooterMenuItem>
            <FooterMenuItem>
              <Link to="/web-dev">Web Development</Link>
            </FooterMenuItem>
            <FooterMenuItem>
              <Link to="/shopify">Shopify Development</Link>
            </FooterMenuItem>
            <FooterMenuItem>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                to="https://calendly.com/miguel-angel-creator/free-meeting"
              >
                Reserve a free meeting
              </Link>
            </FooterMenuItem>
            <FooterMenuItem>
              <Link to="/contact">Contact</Link>
            </FooterMenuItem>
          </FooterMenu>
          <FooterMenu>
            <FooterMenuItem>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                to="https://www.linkedin.com/in/miguelangelpro/"
              >
                LinkedIn
              </Link>
            </FooterMenuItem>
            <FooterMenuItem>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                to="https://instagram.com/imiguel.angel"
              >
                Instagram
              </Link>
            </FooterMenuItem>
            <FooterMenuItem>
              <Link target="_blank" rel="noopener noreferrer" to="https://github.com/muchisx">
                Github
              </Link>
            </FooterMenuItem>
          </FooterMenu>
        </FooterBlock>

        <FooterBlock className="footer__CTAs">
          <FooterMenu>
            <Button
              text="miguel.angel.creator@gmail.com"
              variant="quaternary"
              buttonRole="link"
              to="mailto:miguel.angel.creator@gmail.com?subject=Miguel!%20-%20Help%20me%20with:%20"
            />
            <Button
              Icon={Chat}
              text="WhatsApp"
              variant="quaternary"
              buttonRole="link"
              to="https://wa.me/+573052665559"
              newTab
            />
          </FooterMenu>
        </FooterBlock>
      </Section>
      <Section contain enableGutter customStyles={footerBottomCSS}>
        <FooterMenu>
          <FooterMenuItem>
            <Link to="/privacy-policy">Privacy Policy</Link>
          </FooterMenuItem>
          <FooterMenuItem>
            <Link to="/terms-service">Terms of Service</Link>
          </FooterMenuItem>
        </FooterMenu>

        <Text fontSize="1.4rem" className="footer__copyright">
          <Text tag="span" textColor="var(--text-highlight-secondary)" fontWeight={500}>
            © 2024{' '}
          </Text>
          Miguel Ángel. All rights reserved.
        </Text>
      </Section>
    </FooterStyled>
  );
}

export default Footer;
