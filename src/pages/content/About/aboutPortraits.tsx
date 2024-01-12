// Assets
import portraitOne from '@assets/images/portrait-1.webp';
import portraitTwo from '@assets/images/portrait-2.webp';
// Types
import type { Props as CardGridProps } from '@components/CardGrid/CardGrid.types';

const aboutPortraits: CardGridProps = {
  cardCells: [
    {
      $keyId: crypto.randomUUID(),
      card: {
        $styles: {
          borderColor: 'noBorder',
        },
        backgroundImg: {
          src: portraitOne,
          position: 'center bottom',
        },
      },
    },
    {
      $keyId: crypto.randomUUID(),
      card: {
        $styles: {
          borderColor: 'noBorder',
        },
        backgroundImg: {
          src: portraitTwo,
          position: 'center top',
        },
      },
    },
  ],
};

export default aboutPortraits;
