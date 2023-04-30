import styled from 'styled-components';

type Props = {
  onClickAction?: () => void;
};

const StyledBodyOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: -1;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(2px);
  cursor: alias;
`;

function BodyOverlay(props: Props) {
  const { onClickAction } = props;
  return <StyledBodyOverlay onClick={onClickAction} />;
}

BodyOverlay.defaultProps = {
  onClickAction: undefined,
};

export default BodyOverlay;
