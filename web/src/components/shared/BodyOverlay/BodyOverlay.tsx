// Styled Components
import BodyOverlayStyled from './BodyOverlay.styles';

// Types
type Props = {
  onClickAction?: () => void;
};

function BodyOverlay(props: Props) {
  const { onClickAction } = props;
  return <BodyOverlayStyled onClick={onClickAction} />;
}

export default BodyOverlay;
