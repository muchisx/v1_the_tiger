type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export type Props = {
  text: string | JSX.Element;
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
