import styled from 'styled-components';
import { WordWrap } from '../shared/Logo/Logo.styles';

const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  gap: 8px;
  position: fixed;
  inset: 0;
  bottom: auto;
  padding-inline: calc(12px + 2%);
  padding-block: 12px;
  background: var(--header-bg-color);
  isolation: isolate;
  z-index: 10;

  & > .logo {
    margin-right: auto;
    // Custom MediaQuery Value used here for fine-tuning
    @media only screen and (min-width: 400px) {
      ${WordWrap} {
        font-size: 28px;
      }
    }
  }
  & .header-nav-toggle {
    z-index: 100;
  }
  & .header-nav-toggle.--open {
    mix-blend-mode: difference;
  }
  .header_contact {
    display: none;
  }

  // Custom MediaQuery Value used here for fine-tuning
  @media only screen and (min-width: 400px) {
    .header_contact {
      display: block;
    }
    .header_m-contact {
      display: none;
    }
  }
`;

export default HeaderStyled;
