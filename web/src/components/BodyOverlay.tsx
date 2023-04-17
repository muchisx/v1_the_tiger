import styled from 'styled-components';

const styledBodyOverlay = styled.div`
  width: 100vw;
  width: 100dvw;
  height: 100vh;
  height: 100dvh;
  background-color: #00000024;
`;

function BodyOverlay() {
  return <styledBodyOverlay />;
}

export default BodyOverlay;
