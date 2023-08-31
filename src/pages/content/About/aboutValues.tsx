/* eslint-disable max-len */
// Dependencies
import { css } from 'styled-components';
import { Eye } from '@styled-icons/fluentui-system-filled';
// Styled Components
import { CardGridCell, CardGridStyled } from '@components/CardGrid/CardGrid.styles';
// Utils
import { getMediaQueryValue } from '@utils';
// Types
import type { Props as SplitContentProps } from '@components/SplitContent/SplitContent.types';
import type { Props as CardGridProps } from '@components/CardGrid/CardGrid.types';
import { CardStyled } from '@/components/Card/Card.styles';

const headerCustomStyles = css`
  @media only screen and (min-width: ${getMediaQueryValue('all')}) {
    background-color: var(--body-bg-color-tertiary);
    padding-bottom: 12px;
  }
`;

export const aboutValuesHeader: SplitContentProps = {
  customStyles: headerCustomStyles,
  leftContent: {
    topTag: {
      children: 'Values',
      variant: 'tertiary',
    },
  },
  rightContent: {
    rightHeading: {
      children: (
        <>
          DEVELOP WITH
          <span className="highlight-primary"> PURPOSE</span>
        </>
      ),
      fontSize: {
        all: '3.8rem',
        md: '4.8rem',
      },
    },
    rightTexts: [
      {
        $keyId: crypto.randomUUID(),
        children:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod rerum officiis dolorem placeat unde fuga tenetur? Officia ab vero accusamus, sint necessitatibus modi, placeat recusandae minima similique cum, iste fugit.',
      },
    ],
  },
};

const cardsCustomStyles = css`
  background-color: var(--body-bg-color-tertiary);

  ${CardGridStyled} {
    gap: 2.4rem;
  }

  ${CardStyled} {
    @media only screen and (min-width: ${getMediaQueryValue('sm')}) {
      gap: 7.2rem;
    }
  }

  ${CardGridCell} {
    :nth-child(4),
    :nth-child(5) {
      display: none;
      @media only screen and (min-width: ${getMediaQueryValue('lg')}) {
        display: flex;
      }
    }
  }
`;

const cardsCommonStyles: CardGridProps['cardCells'][0]['card']['$styles'] = {
  headerLayout: 'compact',
  bgColor: 'transparent',
  borderColor: 'var(--neutral-color-quaternary)',
};

export const aboutValuesCards: CardGridProps = {
  customStyles: cardsCustomStyles,
  cardCells: [
    {
      $keyId: crypto.randomUUID(),
      card: {
        headerHeading: 'QUALITY FIRST',
        HeaderIcon: Eye,
        bodyText: {
          children: 'Lorem ipsum, dolor sit amet consectetur adipisicinsssadasdadasdg elit.',
        },
        $styles: cardsCommonStyles,
      },
    },
    {
      $keyId: crypto.randomUUID(),
      card: {
        headerHeading: 'SCALABILITY',
        HeaderIcon: Eye,
        bodyText: {
          children: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
        },
        $styles: cardsCommonStyles,
      },
    },
    {
      $keyId: crypto.randomUUID(),
      card: {
        headerHeading: 'COMPATIBILITY',
        HeaderIcon: Eye,
        bodyText: {
          children: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
        },
        $styles: cardsCommonStyles,
      },
    },
    {
      $keyId: crypto.randomUUID(),
      card: {},
    },
    {
      $keyId: crypto.randomUUID(),
      card: {},
    },
    {
      $keyId: crypto.randomUUID(),
      card: {
        headerHeading: 'PARTNERSHIP',
        HeaderIcon: Eye,
        bodyText: {
          children: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
        },
        $styles: cardsCommonStyles,
      },
    },
    {
      $keyId: crypto.randomUUID(),
      card: {
        headerHeading: 'ATTENTION TO DETAIL',
        HeaderIcon: Eye,
        bodyText: {
          children: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
        },
        $styles: cardsCommonStyles,
      },
    },
    {
      $keyId: crypto.randomUUID(),
      card: {
        headerHeading: 'CREATIVITY',
        HeaderIcon: Eye,
        bodyText: {
          children: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.adadasdasdsa',
        },
        $styles: cardsCommonStyles,
      },
    },
  ],
};
