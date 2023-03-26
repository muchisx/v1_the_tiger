type Props = {
  isUppercase?: boolean;
};

function LogoStyled(props: Props) {
  const { isUppercase } = props;
  return (
    <div>
      <span>Miguel</span>
      <span>Angel</span>
    </div>
  );
}

LogoStyled.defaultProps = {
  isUppercase: false,
};

export default LogoStyled;
