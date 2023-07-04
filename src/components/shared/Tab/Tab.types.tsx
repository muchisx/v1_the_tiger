export type TabStyledProps = {
  isActive?: Props['isActive'];
  isShown?: Props['isShown'];
};

export type Props = {
  children: string;
  isActive?: boolean;
  isShown?: boolean;
};
