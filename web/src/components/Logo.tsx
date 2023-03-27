import LogoStyled from './styled/LogoStyled';

type Props = {
  isUppercase?: boolean;
};

function Logo(props: Props) {
  const { isUppercase } = props;
  return <LogoStyled isUppercase={isUppercase} />;
}

Logo.defaultProps = {
  isUppercase: false,
};

export default Logo;
