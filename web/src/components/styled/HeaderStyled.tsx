import styled from 'styled-components';
import Logo from '../Logo';

type Props = {
  children?: React.ReactNode;
};

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  inset: 0;
  bottom: auto;
  padding-inline: calc(12px + 2%);
  padding-block: 12px;
  background: var(--body-bg-color);
`;

function HeaderStyled(props: Props) {
  const { children } = props;
  return <Header>{children}</Header>;
}

HeaderStyled.defaultProps = {
  children: <Logo />,
};

export default HeaderStyled;
