// Dependencies
import { createContext, useMemo, ReactNode, useContext } from 'react';
import { useIsSmall, useIsXSmall, useIsMedium, useIsLarge, useIsXLarge, useIsXXLarge } from '@hooks';

type MediaQueryContextType = {
  isXSmall: boolean;
  isSmall: boolean;
  isMedium: boolean;
  isLarge: boolean;
  isXLarge: boolean;
  isXXLarge: boolean;
};

type Props = {
  children: ReactNode;
};

const MediaQueryContext = createContext<MediaQueryContextType | null>(null);

function MediaQueryProvider({ children }: Props) {
  const isXSmall = useIsXSmall();
  const isSmall = useIsSmall();
  const isMedium = useIsMedium();
  const isLarge = useIsLarge();
  const isXLarge = useIsXLarge();
  const isXXLarge = useIsXXLarge();

  const mediaChecks = useMemo(
    () => ({
      isXSmall,
      isSmall,
      isMedium,
      isLarge,
      isXLarge,
      isXXLarge,
    }),
    [isLarge, isMedium, isSmall, isXLarge, isXSmall, isXXLarge]
  );

  return <MediaQueryContext.Provider value={mediaChecks}>{children}</MediaQueryContext.Provider>;
}

export function useMediaQueryContext() {
  const currentContext = useContext(MediaQueryContext);

  if (!currentContext) {
    throw new Error('useMediaQueryContext must be used within a MediaQueryProvider');
  }

  return currentContext;
}
export default MediaQueryProvider;
