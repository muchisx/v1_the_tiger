import styled, { css } from 'styled-components';

export const FooterMenuItem = styled.li`
  list-style: none;

  a {
    color: var(--text-primary);
    text-decoration: none;
    font-size: 1.4rem;
    transition: color 0.2s ease-in-out;
  }

  &:hover a {
    color: var(--accent-color);
  }
`;
export const FooterMenu = styled.ul`
  flex-direction: column;
  gap: 8px;
  padding: 0;
`;
export const FooterBlock = styled.div``;
export const sectionCSS = css`
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 0.25fr 0.7fr 0.5fr;
  justify-content: space-between;
  gap: 8px;

  @media only screen and (max-width: 768px) {
    grid-column-gap: 1rem;
    grid-row-gap: 2rem;
    grid-template-columns: 1fr;
    grid-auto-columns: 1fr;
  }
`;
export const FooterStyled = styled.footer`
  margin-top: auto;
  padding-block: 100px 52px;

  ${FooterBlock}, ${FooterMenu} {
    display: flex;
  }

  .footer__menus {
    gap: 12px;
    justify-content: space-around;
  }

  .footer__CTAs {
    justify-content: flex-end;
  }
  .footer__CTAs ul {
    align-items: flex-end;
  }

  @media only screen and (max-width: 768px) {
    .footer__logo {
      grid-area: 1/1/2/4;
    }
    .footer__menus {
      grid-area: 2/1/3/3;

      ul {
        flex: 1;
      }
    }
    .footer__CTAs {
      grid-area: 2/3/3/4;
    }
  }

  @media only screen and (max-width: 528px) {
    .footer__menus {
      grid-area: 3/1/3/4;
      ul {
        flex: auto;
      }
    }
    .footer__CTAs {
      justify-content: flex-start;
      grid-area: 2/1/2/4;
      ul {
        align-items: flex-start;
      }
    }
  }
`;
