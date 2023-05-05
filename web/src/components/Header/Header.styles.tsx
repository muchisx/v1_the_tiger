import styled from 'styled-components';

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

  & .logo {
    margin-right: auto;
    @media only screen and (max-width: 375px) {
      font-size: 22px;
    }
  }
  & .header-nav-toggle {
    z-index: 100;
  }
  .header_m-contact {
    display: none;
  }

  @media only screen and (max-width: 400px) {
    .header_contact {
      display: none;
    }
    .header_m-contact {
      display: block;
    }
  }
`;

export default HeaderStyled;
