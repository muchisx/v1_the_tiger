import { Chat } from '@styled-icons/fluentui-system-filled';
import { Link } from 'react-router-dom';
import Button from '../shared/Button/Button';
import Logo from '../shared/Logo/Logo';
import Section from '../shared/Section/Section';

import { FooterStyled, FooterBlock, FooterMenuItem, sectionCSS, FooterMenu } from './Footer.styles';

function Footer() {
  return (
    <FooterStyled>
      <Section contain containType="margin" enableGutter customStyles={sectionCSS}>
        <FooterBlock className="footer__logo">
          <Logo isUppercase />
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
              <Link target="_blank" rel="noopener noreferrer" to="https://www.linkedin.com/in/miguelangelpro/">
                LinkedIn
              </Link>
            </FooterMenuItem>
            <FooterMenuItem>
              <Link target="_blank" rel="noopener noreferrer" to="https://instagram.com/imiguel.angel">
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
              role="link"
              to="mailto:miguel.angel.creator@gmail.com?subject=Miguel!%20-%20Help%20me%20with:%20"
            />
            <Button Icon={Chat} text="Telegram" variant="quaternary" role="link" to="https://t.me/muchisx" newTab />
          </FooterMenu>
        </FooterBlock>
      </Section>
    </FooterStyled>
  );
}

export default Footer;
