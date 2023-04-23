import LogoStyled, { type StyledProps } from './styled/LogoStyled';

type Props = {
  isUppercase?: StyledProps['isUppercase'];
};

function Logo(props: Props) {
  const { isUppercase } = props;
  return <LogoStyled isUppercase={isUppercase} />;
}

Logo.defaultProps = {
  isUppercase: false,
};

export default Logo;
