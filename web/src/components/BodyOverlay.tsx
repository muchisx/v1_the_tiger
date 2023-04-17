import styled from 'styled-components';

const StyledBodyOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: -1;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(2px);
`;

function BodyOverlay() {
  return <StyledBodyOverlay />;
}

export default BodyOverlay;
