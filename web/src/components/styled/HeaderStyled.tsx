import styled from 'styled-components';
import Logo from '../Logo';

type Props = {
  children?: React.ReactNode;
};

const Header = styled.header`
  display: flex;
  align-items: center;
  gap: 8px;
  position: fixed;
  inset: 0;
  bottom: auto;
  padding-inline: calc(12px + 2%);
  padding-block: 12px;
  background: var(--header-bg-color);
  isolation: isolate;

  & .logo {
    margin-right: auto;
  }
  & .header-nav-toggle {
    z-index: 100;
  }
`;

function HeaderStyled(props: Props) {
  const { children } = props;
  return <Header>{children}</Header>;
}

HeaderStyled.defaultProps = {
  children: <Logo />,
};

export default HeaderStyled;
