// Assets
import placeholderImg from '@assets/images/profile-pic.webp';
// Types
import type { Props as CardGridProps } from '@components/CardGrid/CardGrid.types';

const aboutPortraits: CardGridProps = {
  cardCells: [
    {
      $keyId: crypto.randomUUID(),
      card: {
        backgroundImg: {
          src: placeholderImg,
        },
      },
    },
    {
      $keyId: crypto.randomUUID(),
      card: {
        backgroundImg: {
          src: placeholderImg,
        },
      },
    },
  ],
};

export default aboutPortraits;
