type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export type Props = {
  children: React.ReactNode;
  fontWeight?: number;
  fontSize?: string;
  headingLevel?: HeadingLevel;
  className?: string;
};

// Styled Components
export type HeadingProps = {
  $fontWeight?: Props['fontWeight'];
  $fontSize?: Props['fontSize'];
};
