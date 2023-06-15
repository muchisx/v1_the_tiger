// Styled Components
import { BodyOverlayStyled, BodyLock } from './BodyOverlay.styles';

// Types
type Props = {
  onClickAction?: () => void;
};

function BodyOverlay(props: Props) {
  const { onClickAction } = props;
  return (
    <BodyOverlayStyled onClick={onClickAction}>
      <BodyLock />
    </BodyOverlayStyled>
  );
}

export default BodyOverlay;
