export type TabStyledProps = {
  isActive?: Props['isActive'];
  isShown?: Props['isShown'];
};

export type Props = {
  children: string;
  onClick: () => void;
  isActive?: boolean;
  isShown?: boolean;
};
