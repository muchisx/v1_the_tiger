import styled from 'styled-components';
import SectionStyled from './SectionStyled';
import Logo from '../Logo';

const Footer = styled.footer`
  margin-top: auto;
  padding-block: 100px 52px;
`;
function FooterStyled() {
  return (
    <Footer>
      <SectionStyled contain enableGutter>
        <Logo isUppercase />
      </SectionStyled>
    </Footer>
  );
}

export default FooterStyled;
