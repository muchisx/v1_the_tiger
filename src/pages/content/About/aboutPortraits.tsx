// Dependencies
import { css } from 'styled-components';
// Styled Components
import { CardStyled } from '@components/Card/Card.styles';
// Assets
import portraitOne from '@assets/images/portrait-1.webp';
import portraitTwo from '@assets/images/portrait-2.webp';
// Types
import type { Props as CardGridProps } from '@components/CardGrid/CardGrid.types';

const customStyles = css`
  ${CardStyled} {
    border: none;
  }
`;

const aboutPortraits: CardGridProps = {
  customStyles,
  cardCells: [
    {
      $keyId: crypto.randomUUID(),
      card: {
        backgroundImg: {
          src: portraitOne,
          position: 'center bottom',
        },
      },
    },
    {
      $keyId: crypto.randomUUID(),
      card: {
        backgroundImg: {
          src: portraitTwo,
          position: 'center top',
        },
      },
    },
  ],
};

export default aboutPortraits;
