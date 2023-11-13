/* eslint-disable max-len */
// Dependencies
import { css } from 'styled-components';
import {
  DataTrending,
  Eye,
  Handshake,
  Lightbulb,
  Premium,
  PuzzlePiece,
} from '@styled-icons/fluentui-system-filled';
// Components
import SpanSpace from '@components/shared/SpanSpace/SpanSpace';
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
          DEVELOP WITH <SpanSpace />
          <span className="highlight-primary">PURPOSE</span>
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
          'My core values center around delivering high-quality web development solutions, embracing transparent client relationships, and promoting collaborative partnerships to achieve digital excellence.',
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
        HeaderIcon: Premium,
        bodyText: {
          children: 'I prioritize excellence in every line of code and pixel on the screen.',
        },
        $styles: cardsCommonStyles,
      },
    },
    {
      $keyId: crypto.randomUUID(),
      card: {
        headerHeading: 'DETAILED',
        HeaderIcon: Eye,
        bodyText: {
          children: "Driven by attention to detail. I sweat the small stuff, so you don't have to.",
        },
        $styles: cardsCommonStyles,
      },
    },
    {
      $keyId: crypto.randomUUID(),
      card: {
        headerHeading: 'PARTNERSHIP',
        HeaderIcon: Handshake,
        bodyText: {
          children: "Your goals are my goals, and together, we'll achieve them.",
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
        headerHeading: 'SCALABILITY',
        HeaderIcon: DataTrending,
        bodyText: {
          children: 'I build solutions that grow with your business, ensuring long-term viability.',
        },
        $styles: cardsCommonStyles,
      },
    },
    {
      $keyId: crypto.randomUUID(),
      card: {
        headerHeading: 'COMPATIBILITY',
        HeaderIcon: PuzzlePiece,
        bodyText: {
          children: 'Your website will function seamlessly across all devices and platforms.',
        },
        $styles: cardsCommonStyles,
      },
    },
    {
      $keyId: crypto.randomUUID(),
      card: {
        headerHeading: 'CREATIVITY',
        HeaderIcon: Lightbulb,
        bodyText: {
          children: 'I unleash innovative ideas to conquer challenges and achieve your goals.',
        },
        $styles: cardsCommonStyles,
      },
    },
  ],
};
