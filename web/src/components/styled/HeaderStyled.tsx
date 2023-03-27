import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  align-items: center;
  position: fixed;
  inset: 0;
  bottom: auto;
  padding-inline: calc(12px + 2%);
  padding-block: 12px;
`;

function HeaderStyled(props) {
  const { children } = props;
  return <Header>{children}</Header>;
}

export default HeaderStyled;
