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

  & .logo {
    margin-right: auto;
  }

  & .try {
    position: absolute;
    inset: 0px 0px auto;
    min-height: calc(100% - 16px);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-inline: calc(4px + 2%);
    margin-block: 8px;
    background-color: grey;
    border-radius: 8px;
    z-index: -1;
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
