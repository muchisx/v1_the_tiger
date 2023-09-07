type Props = {
  condition: object | string | number | boolean | undefined | null;
  wrapper: (children: JSX.Element) => JSX.Element;
  children: JSX.Element;
};

const ConditionalWrapper = ({ condition, wrapper, children }: Props) => (condition ? wrapper(children) : children);

export default ConditionalWrapper;
