export type Props = {
  isUppercase?: boolean;
  className?: string;
  fontSize?: string;
};

// Styled Components
export type WordWrapProps = {
  index: number;
  isUppercase?: Props['isUppercase'];
  $fontSize?: Props['fontSize'];
};
