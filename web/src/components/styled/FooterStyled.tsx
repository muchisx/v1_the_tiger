import styled, { css } from 'styled-components';
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
            to="mailto:miguel.angel.creator@gmail.com"
          />
        </FooterBlock>
      </SectionStyled>
    </Footer>
  );
}

export default FooterStyled;
