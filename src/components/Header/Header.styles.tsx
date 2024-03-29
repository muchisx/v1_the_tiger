// Dependencies
import styled from 'styled-components';
// Components
import { WordWrap } from '@components/shared/Logo/Logo.styles';

const HeaderStyled = styled.header<{ showBg: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  position: fixed;
  inset: 0;
  bottom: auto;
  padding-inline: calc(12px + 2%);
  padding-block: 12px;
  isolation: isolate;
  z-index: 4;

  transition: background-color ${(props) => (props.showBg ? '400ms' : '40ms')} ease-in-out;
  background: ${(props) => (props.showBg ? 'var(--header-bg-color)' : 'transparent')};

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
