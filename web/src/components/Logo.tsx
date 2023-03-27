import LogoStyled from './styled/LogoStyled';

function Logo(props) {
  const { isUppercase } = props;
  return <LogoStyled isUppercase />;
}

export default Logo;
