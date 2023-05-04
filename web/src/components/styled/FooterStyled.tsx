import styled, { css } from 'styled-components';
import { Chat } from '@styled-icons/fluentui-system-filled';
import SectionStyled from './SectionStyled';
import Logo from '../Logo';
import Button from '../Button';

const Footer = styled.footer`
  margin-top: auto;
  padding-block: 100px 52px;
`;

const FooterBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const sectionCSS = css`
  display: flex;
  gap: 12px;
  justify-content: space-between;
`;

function FooterStyled() {
  return (
    <Footer>
      <SectionStyled contain enableGutter css={sectionCSS}>
        <FooterBlock>
          <Logo isUppercase />
        </FooterBlock>
        <FooterBlock>
          <Button
            text="miguel.angel.creator@gmail.com"
            variant="quaternary"
            role="link"
            to="mailto:miguel.angel.creator@gmail.com?subject=Miguel!%20-%20Help%20me%20with:%20"
          />
          <Button
            Icon={Chat}
            text="Telegram"
            variant="quaternary"
            role="link"
            to="https://t.me/muchisx"
            newTab
            rel="noopener noreferrer"
          />
        </FooterBlock>
      </SectionStyled>
    </Footer>
  );
}

export default FooterStyled;
